// function to generate markdown for README
function generateMarkdown(data) {

  // function to add license badge if user selects license
  let license = function () {
    let licensesToReturn = []
    for ( let i = 0; i < data.licenses.length; i++) {
      switch ( data.licenses[i] ) {
        case 'GNU AGPLv3':
          licensesToReturn.push('[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)')
          break;
        case 'GNU GPLv3':
          licensesToReturn.push('[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)')
          break;
        case 'Mozilla Public License 2.0':
          licensesToReturn.push('[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)');
          break;
        case 'Apache License 2.0':
          licensesToReturn.push('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)')
          break;
        case 'MIT License':
          licensesToReturn.push('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)')
          break;
        case 'Boost Software License 1.0':
          licensesToReturn.push('[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)')
          break
        default: 
          return 
      }
    };
return licensesToReturn.reduce((acc, current) => acc + 
`
${current}
`, "");
}

// function to add license notices for licenses the user chooses in the command line
let noticesFun = function () {
  let notices = []
  for ( let i = 0; i < data.licenses.length; i++) {
    switch ( data.licenses[i] ) {
      case 'GNU AGPLv3':
        notices.push('* Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.')
        break;
      case 'GNU GPLv3':
        notices.push('* Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.')
        break;
      case 'Mozilla Public License 2.0':
        notices.push('* Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.');
        break;
      case 'Apache License 2.0':
        notices.push('* A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.')
        break;
      case 'MIT License':
        notices.push('* A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.')
        break;
      case 'Boost Software License 1.0':
        notices.push('* A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.')
        break
      default: 
        return 'None'
    }
  };
return notices.reduce((acc, current) => acc + 
`
${current}
`, "");
}

// template literal for the readme file
return `# ${data.title}
${license()}

# Description
${data.description}

# Table of Contents
* [Installation](Installation)
* [Usage](Usage)
* [Contributing](Contributing)
* [Tests](Tests)
* [Questions](Questions)

# Installation
${data.installation}

# Usage
${data.usage}

# License(s)
${noticesFun()}

# Contributing
${data.contributing}

# Tests
${data.tests}

# Questions
* [GitHub](https://github.com/${data.username})
* Email: ${data.email}
`;
}

module.exports = generateMarkdown;
