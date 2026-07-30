const Mustache = require("mustache");
const fs = require("fs");
const { parseJsonc, autoFormat, loadResumes } = require("./src/build-utils");

const resumes = loadResumes();

// Validate resume names against reserved filenames
const reservedNames = ["list"];
for (const resume of resumes) {
  if (reservedNames.includes(resume.name)) {
    throw new Error(
      `Resume name "${resume.name}" is reserved (conflicts with ${resume.name}.html). Choose a different name.`,
    );
  }
}

// Parse and format shared profile data
const profileData = autoFormat(parseJsonc("src/profile.jsonc"));

// Generate HTML for each resume variant
for (const resume of resumes) {
  const dataFile = resume.dataFile || resume.name + ".jsonc";
  const inputFile = "src/data/" + dataFile;
  const outputFile = resume.name + ".html";

  const variantData = autoFormat(parseJsonc(inputFile));
  const pdfFile = resume.name.startsWith("syle-resume")
    ? resume.name + ".pdf"
    : "syle-resume-" + resume.name + ".pdf";
  const resumeURL = resume.resumeURL || "/" + pdfFile;
  const viewData = { ...profileData, ...variantData, ResumeURL: resumeURL };

  const template = fs.readFileSync("src/index.mustache", "utf8");
  const output = Mustache.render(template, viewData);
  fs.writeFileSync(outputFile, output);

  console.log(">", inputFile, "->", outputFile);
}

// Generate list.html (index of all resume variants)
const listTemplate = fs.readFileSync("src/list.mustache", "utf8");
const listData = {
  resumes: resumes.map((r) => ({
    name: r.name,
    description: r.description || "",
    htmlFile: r.name + ".html",
    pdfFile: r.name.startsWith("syle-resume")
      ? r.name + ".pdf"
      : "syle-resume-" + r.name + ".pdf",
  })),
};
const listOutput = Mustache.render(listTemplate, listData);
fs.writeFileSync("list.html", listOutput);
console.log("> generated list.html");
