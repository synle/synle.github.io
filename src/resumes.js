/**
 * Resume variants configuration.
 * Each entry generates: {name}.html and {name}.pdf
 * Use name "index" for the default resume (becomes index.html).
 *
 * To add a new resume variant:
 * 1. Create a new data file in src/ (e.g., data-frontend.js)
 * 2. Add an entry here with name, description, and dataFile
 */
module.exports = [
  {
    name: "index",
    description:
      "Concise one-page resume with abbreviated experience, ideal for quick submissions.",
    dataFile: "data-short.js",
  },
  {
    name: "full",
    description:
      "Complete resume with detailed experience for all positions, suitable for in-depth review.",
    dataFile: "data-full.js",
  },
  {
    name: "legacy",
    description: "Legacy version of the short resume, kept for reference.",
    dataFile: "data-legacy.js",
  },
];
