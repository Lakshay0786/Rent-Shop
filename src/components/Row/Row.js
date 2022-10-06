import React from 'react'
import Card from './Card'
import { motion } from 'framer-motion'

const headingOptions = {
  initial: {
    y: '-100%',
    opacity: 0,
  }, whileInView: {
    y: 0,
    opacity: 1,
  },
}


const Row = (props) => {
  console.log(props.value)
  return (
    <>
      <motion.h1 {...headingOptions} className='heading'>{props.heading}</motion.h1>
      <div className="row-div">
        {
          props.value.map((item) => (
            <Card img={item.background_image} name={item.name} />
          ))
        }
      </div>
    </>
  )
}

export default Row