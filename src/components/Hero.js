import React from 'react'
import './Hero.scss'
import heroVid from '../assests/SnapSave.io-God of War- Ragnarok - Teaser Trailer - PS5 Showcase-(1080p).mov'

const Hero = () => {
  return (
    <div className='herodiv'>
      <video className='videoTag' autoPlay muted>
        <source src={heroVid} type='video/mp4' />
      </video>
    </div>
  )
}

export default Hero