import React from 'react'
import {hitFeatures} from './data';
const HowItsWorks = () => {
  return (
    <div className='hit-wrapper'>
      <div className='container'>
        <div className='hit-container'>
          <div className='hit-head'>
            <span className='tag'>How its works</span>
            <span className='title'>Unlocking potential features along the growth journey</span>
          </div>
          <div className='hit-features'>
            {hitFeatures.map((features,i)=>(
              <>
              <div className='hit-feature' key={i}>
                <div className='detail'>
                  <span className='des'>0{i+1}</span>
                  <span className='sec-title'>{features.title}</span>
                  <span className='text'>{features.des}</span>
                </div>
              <div className='icon'>
                <img src={features.icon} alt="" width={128} height={128} style={{translate:"50% 0rem"}}/>
              </div>
              </div>
              </>         
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItsWorks
