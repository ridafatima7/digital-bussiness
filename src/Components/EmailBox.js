import React from 'react';
import {LuMail} from 'react-icons/lu'
const EmailBox = () => {
  return (
    <div className='email-box'>
      <div>
        <LuMail size={30} color='grey' />
      </div>
      <input 
      type='email'
      placeholder='Enter Email'
      >
      </input>
      <div className='e-button'>Get Funded</div>
    </div>
  )
}

export default EmailBox
