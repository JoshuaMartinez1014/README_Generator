// Outside Packages
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");

let fileName = "./sampleREADME.md";

const questions = [
  { type: "input", message: "What is the project title?", name: "title" },
  { type: "input", message: "Project description?", name: "description" },
  { type: "input", message: "Project installation?", name: "installation" },
  { type: "input", message: "Project use?", name: "use" },
  // prettier-ignore
  { type: "list", message: "Project license?", name: "license", choices: ["MIT", "GPL", "Apache", "None / NA"]},
  { type: "input", message: "Project contribution?", name: "contribution" },
  { type: "input", message: "Project testing?", name: "testing" },
  { type: "input", message: "GitHub UserName?", name: "username" },
  { type: "input", message: "Email?", name: "email" },
];

async function askQuestions(questions) {
  const answers = await inquirer.prompt(questions);
  return await generateMarkdown(answers);
}

async function writeToReadme(fileName, fileContent) {
  fs.writeFile(fileName, fileContent, (err) =>
    err ? console.error(err) : console.log("success")
  );
}

// TODO: Create a function to initialize app
async function init() {
  const fileContent = await askQuestions(questions);
  await writeToReadme(fileName, fileContent);
}

init();
