import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const IMAGES_DIR = path.resolve('public/images');

async function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.webp')) {
      const isHero = fullPath.includes(path.sep + 'hero' + path.sep);
      const isAbout = fullPath.includes(path.sep + 'about' + path.sep);

      const maxBytes = isHero ? 350 * 1024 : (isAbout ? 180 * 1024 : 100 * 1024);

      const inputBuffer = fs.readFileSync(fullPath);
      const metadata = await sharp(inputBuffer).metadata();

      const shouldResize = isHero && metadata.width && metadata.width > 1600;

      // Progressively optimize quality to stay under size target
      let quality = 82;
      let buffer = await sharp(inputBuffer)
        .resize(shouldResize ? { width: 1600, withoutEnlargement: true } : undefined)
        .webp({ quality, effort: 6 })
        .toBuffer();

      while (buffer.length > maxBytes && quality > 45) {
        quality -= 5;
        buffer = await sharp(inputBuffer)
          .resize(shouldResize ? { width: 1600, withoutEnlargement: true } : undefined)
          .webp({ quality, effort: 6 })
          .toBuffer();
      }

      fs.writeFileSync(fullPath, buffer);
      console.log(`Optimized: ${path.relative(IMAGES_DIR, fullPath)} (${(buffer.length / 1024).toFixed(1)} KB, quality: ${quality})`);
    }
  }
}

async function run() {
  console.log('Optimizing images in public/images...');
  await processDirectory(IMAGES_DIR);
  console.log('Image optimization complete.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
