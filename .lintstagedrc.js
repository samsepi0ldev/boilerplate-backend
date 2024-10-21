import path from 'node:path'

const buildCommand = (filenames) => {
  const files = filenames
    .map((f) => path.relative(process.cwd(), f))
  return [
    `pnpm @biomejs/biome format --write ${files.join(' --file ')}`,
    `pnpm @biomejs/biome lint --write ${files.join(' --file ')}`,
    `pnpm vitest --poolOptions.threads.singleThread related --changed ${files.join(' ')} --passWithNoTests`

  ]
}

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildCommand]
}
