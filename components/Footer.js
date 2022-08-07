import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import images from '../src/img/images'

const Footer = () => {
  return (
	  <div className="footer">
      
      <div className="divider"></div>
      <div className="footer-content">
        <div className="size-guide">
          <Link href="/sizeguide"><a>SIZE GUIDE</a></Link>
          <Link href="/contact"><a>CONTACT</a></Link>
        </div>
        <div className="social-media">
          <a href="https://www.instagram.com/loitai.ygn/" target="_blank" rel="noreferrer">INSTAGRAM</a>
          <a href="https://www.facebook.com/loitaigear/" target="_blank" rel="noreferrer">FACEBOOK</a>
          <a href="https://www.facebook.com/messages/t/104076485439964" target="_blank" rel="noreferrer">MESSENGER</a>
        </div>
      </div>
      <div className="copyrights">&copy;2022 All Rights Reserved LOITAI</div>
    </div>
  )
}

export default Footer