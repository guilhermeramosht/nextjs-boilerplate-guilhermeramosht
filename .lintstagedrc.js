module.exports = {
  // Lint & Prettify TS and JS files
  '*.{ts,tsx,js,jsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `npm run lint --fix . ${filenames.join(' --file')}`
  ]
}
