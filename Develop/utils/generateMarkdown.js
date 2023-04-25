// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(response) {
  if (response.license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (response.license === "Apache") {
    return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (response.license === "GPL") {
    return "[![License: GPL-3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(response) {
  if (response.license === "MIT") {
    return `This Project is Licensed under the MIT license,\n
  https://opensource.org/licenses/MIT`;
  } else if (response.license === "Apache") {
    return `This Project is Licensed under the Apache license,\n
  https://opensource.org/licenses/Apache-2.0`;
  } else if (response.license === "GPL") {
    return `This Project is Licensed under the GPL license,\n
  https://www.gnu.org/licenses/gpl-3.0`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(response) {
  if (response.license !== "None / NA") {
    return `## License

  ${renderLicenseLink(response)}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
async function generateMarkdown(response) {
  renderLicenseBadge(response);

  return `${renderLicenseBadge(response)}
  # ${response.title} 
      
  ## Description
  
   ${response.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [License](#License)
  
  ## Installation
  
   ${response.installation}
  
  ## usage
  
   ${response.use} \n
${renderLicenseSection(response)} 

  ## Contribution
  
   ${response.contribution}
  
  ## Testing
  
   ${response.testing}
  
  ## Questions
  
  Github: https://github.com/${response.username},\n
  Email: ${response.email}`;
}

module.exports = generateMarkdown;
