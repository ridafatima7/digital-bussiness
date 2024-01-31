import React from 'react'
import EmailBox from './EmailBox'
import {HeroData} from './data';
import {motion} from 'framer-motion'
const Hero = () => {
    const varients=(delay)=>({
        initial:{
            y:'18rem'
        },
        animate:{
            y:'0rem',
            transition:{
                type:'spring',
                damping:25,
                duration:2.5,
                delay,
            }
        }
    })
    const imagevarients=()=>({
        initial:{
            y:'18rem'
        },
        animate:{
            y:'0rem',
            transition:{
                type:'spring',
                duration:2,
                stiffness:30,
            }
        }
    })
  return (
    <div className='h-wrapper'>
      <div className='container'>
        <img src='/hero-arrow.png' alt='' className='h-arrow'/>
         <div className='h-container'>
             <div className='h-left'>
                <div className='image-row'>
                    {
                        HeroData.slice(0,3).map((person,i)=>(
                            <div className='person-pill' key={i}>
                              <motion.div 
                              initial={'initial'}
                              animate={'animate'}
                              varient={varients(person.delay)}
                              style={{backgroundColor:person.bg}}
                              className='person-pill-bg'>
                                <motion.img
                                 initial={'initial'}
                                 animate={'animate'}
                                 varient={imagevarients()}
                                 src={person.src} alt='' />
                              </motion.div>
                            </div>
                        ))
                    }
                </div>
                <div className='image-row'>
                {
                        HeroData.slice(3,6).map((person,i)=>(
                            <div className='person-pill' key={i}>
                              <motion.div
                              initial={'initial'}
                              animate={'animate'}
                              varient={varients(person.delay)}
                              style={{backgroundColor:person.bg}}
                              className='person-pill-bg'>
                                <motion.img 
                                initial={'initial'}
                                animate={'animate'}
                                varient={imagevarients()}
                                src={person.src} 
                                alt='' />
                              </motion.div>
                            </div>
                        ))
                    }
                </div>
             </div>
             <div className='h-right'>
             <div className='h-title'>
                <span>Redefine How</span>
                <span>You Grow Your</span>
                <span>Digital Bussiness</span>
             </div>
             <div className='h-des'>
                Revenue based funding and execution support designed for early stage founders
             </div>
             <EmailBox />
             </div>          
         </div>
      </div>
    </div>
  )
}

export default Hero
