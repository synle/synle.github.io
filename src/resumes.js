/**
 * Resume variants configuration.
 * Each entry generates: {name}.html and {name}.pdf
 * The first entry with isDefault=true also generates index.html and syle-resume.pdf.
 *
 * To add a new resume variant:
 * 1. Create a new data file in src/ (e.g., data-frontend.js)
 * 2. Add an entry here with name, description, and dataFile
 */
module.exports = [
  {
    name: 'short',
    description:
      'Concise one-page resume with abbreviated experience, ideal for quick submissions.',
    dataFile: 'data-short.js',
    isDefault: true,
  },
  {
    name: 'full',
    description:
      'Complete resume with detailed experience for all positions, suitable for in-depth review.',
    dataFile: 'data-full.js',
  },
];
