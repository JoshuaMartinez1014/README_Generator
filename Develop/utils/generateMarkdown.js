// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(response) {
  if (response.license === "MIT") {
    badge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (response.license === "Apache") {
    badge =
      "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (response.license === "GPL") {
    badge =
      "[![License: GPL-3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    return (badge = "");
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(response) {
  if (response.license === "MIT") {
    return `This Project is Licensed under the MIT license. 
    https://opensource.org/licenses/MIT`;
  } else if (response.license === "Apache") {
    return `This Project is Licensed under the Apache license. 
    https://opensource.org/licenses/Apache-2.0`;
  } else if (response.license === "GPL") {
    return `This Project is Licensed under the GPL license. 
    https://www.gnu.org/licenses/gpl-3.0`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
async function generateMarkdown(response) {
  renderLicenseBadge(response);

  return `${badge}
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
  
   ${response.use}
  
  ## License
  
  ${renderLicenseLink(response)} 
  
  ## Contribution
  
   ${response.contribution}
  
  ## Testing
  
   ${response.testing}
  
  ## Questions
  
  Github: https://github.com/${response.username},
  Email: ${response.email}`;
}

module.exports = generateMarkdown;
