const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://teamxearth.com',
  title: 'TEAMXEARTH',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'we are teamxearth',
  role: 'On-demand Consultancy and Development Team',
  description:
    'I think it’s because we know from our past experiences that big things start small. The biggest oak starts from an acorn and if you want to do anything new, you’ve got to be willing to let that acorn grow into a little sapling and then finally into a small tree and maybe one day it will be a big business on its own. - Jeff Bezos',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Smileytrade.app',
    description: 'Trade US stocks and cryptocurrencies',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://smileytrade.app',
  },
  {
    name: 'Sangkom Capital',
    description: 'Quant and AI-powered Hedge Fund',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Droptrade.io',
    description: 'The best app to trade globally',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hello@teamxearth.com',
}

export { header, about, projects, skills, contact }
