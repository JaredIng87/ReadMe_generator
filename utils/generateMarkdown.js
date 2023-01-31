// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "MIT": return "https://img.shields.io/badge/license-MIT-lightgreen"
    case "GPL": return "https://img.shields.io/badge/license-GPL-black"
    case "Apache 2.0": return "https://img.shields.io/badge/license-Apache-blue"
    case "MPL-2.0": return "https://img.shields.io/badge/license-compliant-blue"
    case "CDDL-1.0": return "https://img.shields.io/badge/license-ppl1.3c-ofl-red"
    default:  return "https://img.shields.io/badge/license-Apache-gray"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "MIT": return "https://opensource.org/licenses/MIT"
    case "GPL": return "https://opensource.org/licenses/gpl-license"
    case "Apache 2.0": return "https://opensource.org/licenses/Apache-2.0"
    case "MPL-2.0": return "https://opensource.org/licenses/MPL-2.0"
    case "CDDL-1.0": return "https://opensource.org/licenses/CDDL-1.0"
    default:  return "https://img.shields.io/badge/license-Apache-gray"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License

 \`\`\`md
 ${license} 
\`\`\`

Link to license text:
${renderLicenseLink(license)}


![badge](${renderLicenseBadge(license)})
`
}

// function to generate markdown for README
function generateMarkdown({title, description, installation, usage, contributing, tests, license }) {
  return `# ${title}

  ${description}

  ## Table of Contents

  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [License](#license)
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## Contributing
  
  ${contributing}

  ## Tests
  
  ${tests}
  
  ${renderLicenseSection(license)}`;
}

module.exports = generateMarkdown;
