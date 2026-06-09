import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const docsDir = path.join(root, 'docs')

async function collectMarkdownFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await collectMarkdownFiles(fullPath)))
    } else if (entry.name.endsWith('.md')) {
      files.push(fullPath)
    }
  }

  return files.sort()
}

const files = await collectMarkdownFiles(docsDir)
const sections = []

for (const file of files) {
  const relative = path.relative(root, file)
  const content = await readFile(file, 'utf8')
  sections.push(`# File: ${relative}\n\n${content.trim()}\n`)
}

const output = [
  '# Acme Design System — Full Reference',
  '',
  '> Auto-generated from docs/. Run `pnpm build:llms` to refresh.',
  '',
  ...sections,
].join('\n')

await writeFile(path.join(root, 'llms-full.txt'), output, 'utf8')
console.log(`Wrote llms-full.txt (${files.length} files)`)
