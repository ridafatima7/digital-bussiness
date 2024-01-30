import React,{useState} from 'react'
import './Bussiness.css';
import {BiMenuAltRight} from 'react-icons/bi'
import {RxCross2} from 'react-icons/rx'

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenu]=useState(false);
  return (
    <div className='n-wrapper'>
      <div className='container'>
        {/* Desktop version */}
        <div className='n-container'>
            <div className='n-logo'>
                <span>RIDAKEEPSCODE</span>
            </div>
            <div className='n-right'>
              <div className='n-menu'>
                <span>What we do</span>
                <span>How it works</span>
                <span>Who we invest in?</span>
                <span>Testimonials</span>
              </div>
              <div className='fund-button'>Get Funded</div>
            </div>
        </div>
        {/* Mobile Version */}
        <div className='m-container'>
            <div className='-logo'>
                <span>RIDAKEEPSCODE</span>
            </div>
            {
                 !mobileMenuOpen ?(
                    <BiMenuAltRight size={30} onClick={()=>setMobileMenu(true)} />

                 ):(
                    <RxCross2 size={30} onClick={()=>setMobileMenu(false)} />
                 )
            }
            <div className='m-menu' style={{transform: mobileMenuOpen && "translateX(0%)"}} >
                <span>What we do</span>
                <span>How it works</span>
                <span>Who we invest in</span>
                <span>Testimonials</span>
                <div className='m-fund-button'>Get Funded</div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
