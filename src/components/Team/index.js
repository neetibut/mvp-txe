import Avatar from '@mui/material/Avatar'
import React from 'react'
import imageNV from '../../images/nv-small.jpeg'
import './index.css'
import { aboutNV } from '../../portfolio'

const Team = () => {
  const [{ name, role, description }] = aboutNV
  return (
    <section id='team' className='section projects'>
      <h2 className='section__title'>Team</h2>

      <div className='team__grid'>
        <Avatar
          alt='Neetibut Vasinondha'
          src={imageNV}
          sx={{ width: 150, height: 150 }}
        />

        <div className='about'>
          {name && (
            <h2>
              Hi, <span className='about__name'>{name}</span>
            </h2>
          )}

          {role && <h3 className='about__role'>{role}</h3>}
          <p className='about__desc'>{description && description}</p>
        </div>
      </div>
    </section>
  )
}

export default Team
