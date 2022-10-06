import React from 'react'
import './Card.scss'
import { motion } from 'framer-motion'

const divOptions = {
    initial: {
        scale: 0.1,
        opacity: 0,
    }, whileInView: {
        scale: 1,
        opacity: 1,
    },
    transition: {
        delay: 0.3,

    }
}

function Card({ img, name }) {
    return (
        <motion.div {...divOptions} style={{ position: 'relative' }} className='card-div'>
            <img className='game-photo' src={img} alt='cover' />
            <div className='layer'>
                <h3>{name}</h3>
            </div>
        </motion.div>
    )
}

export default Card