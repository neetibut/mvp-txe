const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://teamxearth.com',
  title: 'TEAMXEARTH',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'we are teamxearth',
  role: 'We strategize and develop products that users love',
  text2: 'partner | hire | invest | join | follow',
  description:
    "'. . . we know from our past experiences that big things start small. The biggest oak starts from an acorn and if you want to do anything new, you’ve got to be willing to let that acorn grow into a little sapling and then finally into a small tree and maybe one day it will be a big business on its own. - Jeff Bezos'",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const aboutNV = [
  {
    // all the properties are optional - can be left empty or deleted
    name: "I'm Neeti",
    role: 'Neetibut Vasinondha, Founder and Chief Engineer',
    description:
      "Neeti is the founder and Chief Engineer at TeamXEarth, leading the overall direction and product strategy for the company and its family of apps: Smileytrade, Co-founder, Droptrade and Sangkom Capital. After earning his bachelor's and master's degree in medical engineering from Queen Mary, University of London in 2009, Neeti co-founded a food and technology startup in London in 2011. It was an early pioneer in healthy fast food model and developed proprietary cashless, self-service and on-demand delivery system. He led the company through a successful acquisition by a public company in 2017. He entered the software development industry in 2021 with particular interests in web and mobile, blockchain, artificial intelligence, IoT and metaverse development. Neeti founded TeamXEarth as a digital-first and remote organization of multi-disciplinary full stack developers covering the fields of software engineering, design and strategy.",
    resume: 'https://example.com',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Smileytrade.app',
    description: 'Trade US stocks and cryptocurrencies',
    stack: ['SASS', 'JavaScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://smileytrade.app',
  },
  {
    name: 'Sangkom Capital',
    description: 'Quant and AI-powered Hedge Fund',
    stack: ['SASS', 'JavaScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Droptrade.io',
    description: 'The best app to trade globally',
    stack: ['SASS', 'JavaScript', 'React'],
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
  'NFT',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hello@teamxearth.com',
}

export { header, about, aboutNV, projects, skills, contact }
