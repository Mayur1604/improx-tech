/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'node_modules', 'next', 'dist', 'export', 'worker.js');

if (!fs.existsSync(targetFile)) {
  process.exit(0);
}

let content = fs.readFileSync(targetFile, 'utf8');

if (content.includes('safeMkdir')) {
  process.exit(0);
}

const safeMkdirFn = `async function safeMkdir(dir) {
    for (let i = 0; i < 10; i++) {
        try {
            return await _promises.default.mkdir(dir, { recursive: true });
        } catch (err) {
            if ((err.code === 'EPERM' || err.code === 'EBUSY') && i < 9) {
                await new Promise((r) => setTimeout(r, 50 * Math.pow(1.5, i)));
                continue;
            }
            throw err;
        }
    }
}
`;

content = content.replace(
  'async function exportPageImpl(input, fileWriter) {',
  `${safeMkdirFn}\nasync function exportPageImpl(input, fileWriter) {`
);

content = content.replace(
  /await _promises\.default\.mkdir\(\(0, _path\.dirname\)\(htmlFilepath\), \{\s*recursive: true\s*\}\);/,
  'await safeMkdir((0, _path.dirname)(htmlFilepath));'
);

content = content.replace(
  /mkdir:\s*\(dir\)\s*=>\s*_promises\.default\.mkdir\(dir,\s*\{\s*recursive:\s*true\s*\}\)/,
  'mkdir: (dir)=>safeMkdir(dir)'
);

fs.writeFileSync(targetFile, content, 'utf8');
console.log('[patch-next] Applied Windows EPERM mkdir concurrency guard to Next.js export worker.');
