import React from 'react'
import EmailBox from './EmailBox'
import {HeroData} from './data';
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <div className='h-wrapper'>
      <div className='container'>
         <div className='h-container'>
             <div className='h-left'>
                <div className='image-row'>
                    {
                        HeroData.slice(0,3).map((person,i)=>(
                            <div className='person-pill' key={i}>
                              <div className='person-pill-bg'>
                                <img src={person.src} alt='' />
                              </div>
                            </div>
                        ))
                    }
                </div>
                <div className='image-row'>
                {
                        HeroData.slice(3,6).map((person,i)=>(
                            <div className='person-pill' key={i}>
                              <div className='person-pill-bg'>
                                <img src={person.src} alt='' />
                              </div>
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
