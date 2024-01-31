import React from 'react';
import {containerVarients, ourDiffFeatures, tagVarient} from './data';
import {motion} from 'framer-motion';
const OurDiff = () => {
  return (
    <div className='od-wrapper'>
      <div className='container'>
        <div className='od-container'>
           <div className='od-head'>
            <motion.span 
            initial="offscreen"
            whileInView={"offscreen"}
            varients={tagVarient}
            className='tag'>Our Difference</motion.span>
            <motion.span
             initial="offscreen"
             whileInView={"offscreen"}
             varients={tagVarient}
            className='title'>Fair capital,hassle free</motion.span>
            <motion.span 
             initial="offscreen"
             whileInView={"offscreen"}
             varients={tagVarient}
            className='text'>Our mission is to leave the early field growth capital.
            <br />we provide early capital for that is unbiased ,flecible and non-dilutive execution support for dillutive behaviour</motion.span>
           </div>
           <div className='od-features'>
            {
                ourDiffFeatures.map((feature,i)=>(
                    <motion.div
                    initial="offscreen"
                    whileInView={"offscreen"}
                    varients={containerVarients((i+1)*0.1)}
                    key={i} className='od-feature'>
                        <img src={feature.icon} alt='' width={128} height={128}/>
                        <span className='sec-title'>{feature.title}</span>
                        <span className='text'>{feature.des}</span>
                    </motion.div>
                ))
            }
           </div>
        </div>
      </div>
    </div>
  )
}

export default OurDiff
