import React from 'react';
import {LuMail} from 'react-icons/lu';
import {motion} from 'framer-motion';
import { containerVarients } from './data';
const EmailBox = () => {
  return (
    <motion.div 
    initial={{width:'5rem',borderRadius:'100%'}}
    whileInView={{
      width:'70%',
      borderRadius:'999px',
      transition:{
        type:'easeOut',
        duration:1,
      },
    }}
    className='email-box'>
      <motion.div
      varients={containerVarients(0.6)}
      initial="offscreen"
      whileInView={"onscreen"}
      viewport={{
        once:true
      }}
      >
        <LuMail size={30} color='grey' />
      </motion.div>
      <motion.input 
       varients={containerVarients(0.7)}
       initial="offscreen"
       whileInView={"onscreen"}
       viewport={{
         once:true
       }}
      type='email'
      placeholder='Enter Email'
      >
      </motion.input>
      <motion.div
        varients={containerVarients(0.9)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
          once:true
        }}
       className='e-button'>Get Funded</motion.div>
    </motion.div>
  )
}

export default EmailBox
