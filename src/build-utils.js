const fs = require("fs");

/**
 * @typedef {Object} ResumeVariant
 * @property {string} name - URL slug and output filename (e.g., "index", "full", "2026-03")
 * @property {string} [description] - Human-readable description shown on the list page
 * @property {string} [dataFile] - Data file in src/data/. Defaults to {name}.jsonc
 * @property {boolean} [allowMultiplePages] - Allow PDF to span multiple pages. Defaults to true if name contains "full"
 */

/**
 * Parses a JSONC string by stripping single-line comments and trailing commas.
 * @param {string} raw - Raw JSONC string content
 * @returns {any} Parsed JSON value
 */
function parseJsoncString(raw) {
  const stripped = raw
    .replace(/^(\s*)\/\/.*$/gm, "") // strip lines that are only comments (not inside strings)
    .replace(/,\s*([\]}])/g, "$1"); // strip trailing commas
  return JSON.parse(stripped);
}

/**
 * Reads and parses a JSONC file.
 * @param {string} filePath - Path to the .jsonc file
 * @returns {any} Parsed JSON value
 */
function parseJsonc(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return parseJsoncString(raw);
}

/**
 * Trims a string and ensures it ends with exactly one period.
 * @param {string} s - Input string
 * @returns {string} Formatted string with trailing period
 */
function formatString(s) {
  return `${s.trim().replace(/\.+$/, "")}.`;
}

/**
 * Recursively walks a data object and auto-formats known fields:
 * - "items" arrays: each string gets trimmed + trailing period
 * - "description" strings: trimmed + trailing period
 * @param {any} obj - Data object to format
 * @returns {any} Formatted data object
 */
function autoFormat(obj) {
  if (Array.isArray(obj)) {
    return obj.map((item) => autoFormat(item));
  }
  if (obj && typeof obj === "object") {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      if (key === "items" && Array.isArray(value)) {
        result[key] = value.map((s) =>
          typeof s === "string" ? formatString(s) : s,
        );
      } else if (key === "description" && typeof value === "string") {
        result[key] = formatString(value);
      } else {
        result[key] = autoFormat(value);
      }
    }
    return result;
  }
  return obj;
}

/**
 * Auto-discovers .jsonc files in src/data/, merges with explicit overrides
 * from src/resumes.jsonc, and returns the deduplicated list.
 * Explicit entries always win on conflict.
 * @returns {ResumeVariant[]}
 */
function loadResumes() {
  const autoResumes = fs
    .readdirSync("src/data")
    .filter((f) => f.endsWith(".jsonc"))
    .map((f) => {
      const name = f.replace(/\.jsonc$/, "");
      return { name, description: "", dataFile: f };
    });

  const explicitResumes = parseJsonc("./src/resumes.jsonc");

  /** @type {Map<string, ResumeVariant>} */
  const resumeMap = new Map();
  for (const r of autoResumes) resumeMap.set(r.name, r);
  for (const r of explicitResumes)
    resumeMap.set(r.name, { ...resumeMap.get(r.name), ...r });

  return [...resumeMap.values()];
}

module.exports = {
  parseJsoncString,
  parseJsonc,
  formatString,
  autoFormat,
  loadResumes,
};
