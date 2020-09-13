

// function to generate markdown for README
function generateMarkdown(data) {
    let license = function () {
      for ( let i = 0; i < data.licenses.length; i++) {
        switch ( data.licenses[i] ) {
          case 'GNU AGPLv3':
            console.log('* [License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)')
            break;
          case 'GNU GPLv3':
            console.log('* [License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)')
            break;
          case 'Mozilla Public License 2.0':
            console.log('* [License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)')
            break;
          case 'Apache License 2.0':
            console.log('* [License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)')
            break;
          case 'MIT License':
            console.log('* [License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)')
            break;
          case 'Boost Software License 1.0':
            console.log('* [License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)')
            break;
          default: 
            console.log('* None')
        }
      }
    }

  return `
  # ${data.title}

  # License(s)
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

  # Contributing
  ${data.contributing}

  # Tests
  ${data.tests}

  # Questions
  [GitHub](https://github.com/${data.username})
  Email: ${data.email}
`;
}


module.exports = generateMarkdown;
