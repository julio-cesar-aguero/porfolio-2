import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc/SectionWrapper';
import {technologies} from '../constants'
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt';


const TechCard = ({ technology, index }) => {
  return(
    <>
    <Tilt
      className="xs:w-[250px] w-full"
    >
    <motion.div
        variants={fadeIn("right", "spring", 0.3 * index, 0.75)}
        className='w-full green-pink-gradient m-[0px] rounded-[5px] shadow-card flex flex-col items-center opacity-50'
      >
        
         

        
    <img 
      src={technology.icon} 
      alt="" 
      className='w-90% md:w-[50%] object-contain opacity-90'
    />
    <h3 className='text-[19px] font-bold px-10 py-10'>
      { technology.name }
    </h3>
    </motion.div>
    </Tilt>
    </>
    
    )
  }

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-20">
      {
        technologies.map((technology, index) => (
          <div 
            key={index}
            className='w-[30%] sm:w-[20%] s:w-[25%] '
          >
            <TechCard technology={technology} index={index} />
          </div>
        ))
      }
    </div>
  )
}

export default SectionWrapper(Tech,'')