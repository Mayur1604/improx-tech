/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const { compile, optimize } = require('@tailwindcss/node');
const { Scanner } = require('@tailwindcss/oxide');

async function buildCss() {
  const rootDir = path.resolve(__dirname, '..');
  const appDir = path.join(rootDir, 'app');

  const scanner = new Scanner({
    sources: [
      {
        base: appDir,
        pattern: '**/*.{tsx,ts,jsx,js,html}',
        negated: false,
      },
    ],
  });

  const candidates = scanner.scan();
  console.log(`[build-css] Scanned ${candidates.length} candidates from app/`);

  const compiler = await compile('@import "tailwindcss";', {
    base: rootDir,
    onDependency: () => {},
  });

  let css = compiler.build(candidates);

  // Append custom root, body, and animation styles
  css += `\n
:root {
  --background: #ffffff;
  --foreground: #171717;
}

body {
  background-color: #ffffff;
  color: #171717;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

.animate-marquee-infinite {
  display: flex;
  width: max-content;
  animation: marquee 42s linear infinite;
  will-change: transform;
}

.animate-marquee-infinite:hover {
  animation-play-state: paused;
}
`;

  try {
    const optimized = optimize(css, { minify: false });
    css = optimized.code;
  } catch (e) {
    console.warn('[build-css] Optimization skipped:', e.message);
  }

  const outPath = path.join(rootDir, 'app', 'globals.css');
  fs.writeFileSync(outPath, css, 'utf8');
  console.log(`[build-css] Successfully wrote ${css.length} bytes to app/globals.css`);
}

buildCss().catch((err) => {
  console.error('[build-css] Error:', err);
  process.exit(1);
});
