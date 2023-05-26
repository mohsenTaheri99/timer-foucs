import React from 'react'
import './footer.css'
import {BsInstagram,BsTwitter,BsTwitch} from 'react-icons/bs'

function Footer() {
  return (
    <div className='footer-cuntener'>
        <div className="sosial-cuntener">
            <a className="sosial">
                <BsInstagram/>
            </a>
            <a className="sosial">
                <BsTwitter/>
            </a>
            <a className="sosial">
                <BsTwitch/> 
            </a>
        </div>

    </div>
  )
}

export default Footer