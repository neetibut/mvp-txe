import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import Checkout from '../Checkout'
import './About.css'

const About = () => {
  const { name, role, description, description2, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, <span className='about__name'>{name}.</span>
        </h1>
      )}
      {role && <h2 className='about__role'>{role}.</h2>}
      <h3 style={{ padding: '20px' }}>Consult, build and launch on-demand</h3>
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {/* {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Consult
            </span>
          </a>
        )} */}

        {/* {resume && (
          <a href=' '>
            <Checkout />
          </a>
        )} */}

        <a
          href='https://calendly.com/neetibut/15min'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span type='button' className='btn btn--outline'>
            Consult
          </span>
        </a>

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
      <p className='about__desc'>{description2 && description2}</p>
      <div className='about__contact center'>
        {resume && (
          <a href='#projects'>
            <span type='button' className='btn btn--outline'>
              view projects
            </span>
          </a>
        )}
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
