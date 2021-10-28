const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://teamxearth.com',
  title: 'TEAMXEARTH',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'we are teamxearth',
  role: 'On-demand Development Team',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
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
