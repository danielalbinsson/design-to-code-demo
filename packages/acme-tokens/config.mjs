import StyleDictionary from 'style-dictionary';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tokensRoot = path.resolve(__dirname, '../tokens');
const buildPath = path.resolve(__dirname, 'build');

const themes = [
  {
    file: 'brand-alpha.css',
    selector: '[data-theme="brand-alpha"]',
    sources: [
      'primitive/**/*.json',
      'brand-alpha/**/*.json',
      'semantic/**/*.json',
    ],
  },
  {
    file: 'brand-alpha.dark.css',
    selector: '[data-theme="brand-alpha"][data-mode="dark"]',
    sources: [
      'primitive/**/*.json',
      'brand-alpha/**/*.json',
      'semantic/**/*.json',
      'dark/semantic/**/*.json',
      'dark/brand-alpha/**/*.json',
    ],
  },
  {
    file: 'brand-beta.css',
    selector: '[data-theme="brand-beta"]',
    sources: [
      'primitive/**/*.json',
      'brand-beta/color.json',
      'brand-beta/typography.json',
      'semantic/**/*.json',
      'brand-beta/radius.json',
      'brand-beta/semantic/typography.json',
    ],
  },
  {
    file: 'brand-beta.dark.css',
    selector: '[data-theme="brand-beta"][data-mode="dark"]',
    sources: [
      'primitive/**/*.json',
      'brand-beta/color.json',
      'brand-beta/typography.json',
      'semantic/**/*.json',
      'brand-beta/radius.json',
      'brand-beta/semantic/typography.json',
      'dark/semantic/**/*.json',
      'dark/brand-beta/**/*.json',
    ],
  },
];

await mkdir(buildPath, { recursive: true });

for (const theme of themes) {
  const sd = new StyleDictionary({
    log: { verbosity: 'silent' },
    source: theme.sources.map((pattern) => path.join(tokensRoot, pattern)),
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: `${buildPath}/`,
        files: [
          {
            destination: theme.file,
            format: 'css/variables',
            options: {
              selector: theme.selector,
              outputReferences: true,
            },
          },
        ],
      },
    },
  });

  await sd.buildAllPlatforms();
}

console.log('Built theme CSS files:', themes.map((t) => t.file).join(', '));
