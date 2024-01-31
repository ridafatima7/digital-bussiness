import React from 'react';
import '../App.css';
import {containerVarients, features,tagVarient} from './data';
import {motion} from 'framer-motion';
const WhatWeDo = () => {
  return (
    <div className='wwd-wrapper'>
      <div className='container'>
        <div className='wwd-container'>
          <div className='wwd-head'>
            <motion.span 
            initial={"offscreen"}
            whileInView={"onscreen"}
            varients={tagVarient}
            className='tag'>What we do</motion.span>
            <motion.span
              initial={"offscreen"}
            whileInView={"onscreen"}
            varients={tagVarient}
            className='title'>
                {""}
                Enpowering founders with non dilutive capital and execution expertise
            </motion.span>
            <motion.span
              initial={"offscreen"}
            whileInView={"onscreen"}
            varients={tagVarient}
            className='des'>Here is how we can evaluate</motion.span>
          </div>
          <div className='wwd-blocks'>
            <div className='wwd-block'>
                <motion.span 
                initial={"offscreen"}
                whileInView={"onscreen"}
                varients={tagVarient}
                className='sec-title'>Blue Advances</motion.span>
                <motion.span 
                initial={"offscreen"}
                whileInView={"onscreen"}
                varients={tagVarient}
                className='text'>Fund recurring growth expenses e.g. customer acquisition,inventory</motion.span>
                <div className='block-features'>
                   {
                    features.slice(0,3).map((feature,i)=>(
                        <motion.div
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        varients={containerVarients((i+1)*0.1)}
                        className='block-feature' key={i}>
                            <img src={feature.icon} alt='' width={60} height={60}/>
                            <span>{feature.title}</span>
                        </motion.div>
                    ))
                   }
                </div>
            </div>
            <div className='wwd-block'>
                <motion.span 
                initial={"offscreen"}
                whileInView={"onscreen"}
                varients={tagVarient}
                className='sec-title'>Blue Seed</motion.span>
                <motion.span 
                initial={"offscreen"}
                whileInView={"onscreen"}
                varients={tagVarient}
                className='text'>Fund one-offs to scale e.g. product,hiring</motion.span>
                <div className='block-features'>
                   {
                    features.slice(3,6).map((feature,i)=>(
                        <motion.div 
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        varients={containerVarients((i+1)*0.1)}
                        className='block-feature' key={i}>
                            <img src={feature.icon} alt='' width={60} height={60}/>
                            <span>{feature.title}</span>
                        </motion.div>
                    ))
                   }
                </div>
            </div>
          </div>
          <motion.div 
          initial={"offscreen"}
          whileInView={"onscreen"}
          varients={containerVarients(0.4)}
          className='wwd-support'>
            <div>
            <span className='sec-title'>Blue Growth Support</span>
          <span className='des'>Data Insights and full stack expertise tosuperchange growth</span>
            </div>  
            <div>
                <span className='text'>Actionable data insights by connecting revenue,marketting</span>
                <span className='text'>On demand execution expertise at cost or remove share across proportion design ,
                engineering ,marketting design,brand,intelectual property and talent mangement</span>
            </div>  
          </motion.div>
         
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
