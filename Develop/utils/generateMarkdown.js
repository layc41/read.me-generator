// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  #Licenses


  #Description
  ${data.description}

  #Table of Contents
 

  #Installation
  ${data.installation}

  #Usage
  ${data.usage}

  #Contributing
  ${data.contributing}

  #Tests
  ${data.tests}
  
  #Questions
  

`;
}

module.exports = generateMarkdown;
