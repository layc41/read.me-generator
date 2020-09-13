// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  # Licenses


  # Description
  ${data.description}

  # Table of Contents
  [Installation][Installation]
  [Usage][Usage]
  [Contributing][Contributing]
  [Tests][Tests]
  [Questions][Questions]

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
