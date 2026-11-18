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

/* Minimal professional image and card transitions */
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 51, 0.08), 0 8px 10px -6px rgba(0, 0, 51, 0.04);
}

.card-image-zoom {
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
}

.card-hover:hover .card-image-zoom,
.group:hover .card-image-zoom {
  transform: scale(1.05);
  filter: contrast(105%) brightness(102%);
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
