'use client'

import Image from 'next/image'
import logoWhite from '@/assets/images/logo/Leen-Whispers_white_high-res-01.png'
import logoBlack from '@/assets/images/logo/Leen-Whispers_gold_high-res-01.png'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react';
import Cart from './Cart'

export default function NavBar({dict,lang}) {

  const [theme, setTheme] = useState()

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add("theme--dark");
    } else {
      document.body.classList.remove("theme--dark");
    }
  }, [theme]);

  useEffect(() => {
    if (localStorage.getItem("theme") === 'dark') {
      document.body.classList.add("theme--dark");
    } else {
      document.body.classList.remove("theme--dark");
    }
  }, []);


    const pathName = usePathname()

    const redirectedPathName = (locale) => {
      if (!pathName) return '/'
      const segments = pathName.split('/')
      segments[1] = locale
      return segments.join('/')
    }

    return (
      <>
        <header id="header" className="tra-menu navbar-light white-scroll">
        <div className="header-wrapper">
          {/* MOBILE HEADER */}
          <div className="wsmobileheader clearfix">
            <span className="smllogo">
              <a  href= "/" className="logo-black" style={{marginRight: '100px'}}>
                <Image src={logoBlack} />
              </a>
              <a  href= "/" className="logo-white" style={{marginRight: '100px'}}>
                <Image
                src={logoWhite}
                />
              </a>
            </span>
            <a id="wsnavtoggle" className="wsanimated-arrow">
              <span />
            </a>
          </div>
          {/* NAVIGATION MENU */}
          <div className="wsmainfull menu clearfix">
            <div className="wsmainwp clearfix">
              {/* HEADER BLACK LOGO */}
              <div className="desktoplogo">
                <a  href= "/" className="logo-black">
                  <Image
                  style={{width:'270px',maxHeight:'80px'}}
                  src={logoBlack} />
                </a>
              </div>
              {/* HEADER WHITE LOGO */}
              <div className="desktoplogo">
                <a  href= "/" className="logo-white">
                <Image
                style={{width:'270px',maxHeight:'80px'}}
                src={logoWhite}
                />
                </a>
              </div>
              {/* MAIN MENU */}
              <nav className="wsmenu clearfix">
                <ul className="wsmenu-list" 
                // style={{marginRight: '-15px'}}
                 >
                  {/* DROPDOWN SUB MENU */}
                  <li aria-haspopup="true" >
                    <a  href= {`/${lang}/about`} style={{letterSpacing:'0px', paddingLeft: "12px", paddingRight : "12px"}} className="h-link">
                      {dict.about}
                    </a>
                  </li>
                  {/* SIMPLE NAVIGATION LINK */}
                  <li className="nl-simple" aria-haspopup="true">
                    <a href= {`/${lang}/team`}style={{letterSpacing:'0px',paddingLeft: "12px", paddingRight : "12px"}} className="h-link">
                    {dict.team}
                    </a>
                  </li>
                  {/* DROPDOWN MENU */}
                  <li aria-haspopup="true">
                    <a href= {`/${lang}/pricing`}style={{letterSpacing:'0px',paddingLeft: "12px", paddingRight : "12px"}} className="h-link">
                      {dict.services}
                    </a>
                  </li>

                  <li aria-haspopup="true">
                    <a href= {`/${lang}/gallery`} style={{letterSpacing:'0px',paddingLeft: "12px", paddingRight : "12px"}} className="h-link">
                      {dict.gallery}
                    </a>
                  </li>

                  {localStorage.getItem('username') && <li aria-haspopup="true">
                    <a href= {`/${lang}/contact`} style={{letterSpacing:'0px',paddingLeft: "12px", paddingRight : "12px"}}  className="h-link">
                      {dict.contact}
                    </a>
                  </li>}
                  {/* SIGN UP BUTTON */}
                  <li className="nl-simple" aria-haspopup="true">
                    <a
                      style={{letterSpacing:'0px',paddingLeft: "12px", paddingRight : "12px"}}
                      href={`/${lang}/booking`}
                      className="btn btn--tra-white hover--white last-link"
                    >
                      {dict.booking}
                    </a>
                    </li>
                    {/* to delete */}
                    <li aria-haspopup="true">
                      <Cart mode={theme} />
                    </li>
                    {/* DROPDOWN SUB MENU */}
                    <li aria-haspopup="true">
                    <a href="#" className="h-link"  style={{fontSize:'larger',letterSpacing:'0px',paddingLeft: "12px", paddingRight : "12px"}}>
                    {/* <Image src={globe} alt='language' style={{width:'25px' , height:'25px'}} className="h-link"/> */}
                    〄<span className='globe' /> <span className="wsarrow" />
                    </a>
                    <ul className="sub-menu">
                      <li aria-haspopup="true">
                        {/* <Link href={redirectedPathName('ar')} >ar</Link> */}
                        <a href= {redirectedPathName('ar')}>العربية</a>
                      </li>
                      <li aria-haspopup="true">
                      {/* <Link href={redirectedPathName('ar')} >En</Link> */}
                        <a href= {redirectedPathName('en')}>English</a>
                      </li>
                    </ul>
                  </li>
                  <li aria-haspopup="true">
                    <a href="#" className="h-link" style={{fontSize:'larger',letterSpacing:'0px',paddingLeft: "12px", paddingRight : "12px"}}>
                      {/* <Image src={mode} alt='theme' style={{width:'25px' , height:'25px' , filter:'brightness(70%)'}}/> */}
                      ☼<span className="wsarrow" />
                    </a>
                    <ul className="sub-menu">
                      <li aria-haspopup="true">
                        {/* <Link href={redirectedPathName('ar')} >ar</Link> */}
                        <a  onClick={() => {
                          localStorage.setItem("theme","dark")
                          setTheme(localStorage.getItem("theme"))
                        }}>dark</a>
                        {/* <a>dark</a> */}
                      </li>
                      <li aria-haspopup="true">
                      {/* <Link href={redirectedPathName('ar')} >En</Link> */}
                        <a onClick={() => {
                          localStorage.setItem("theme","light")
                          setTheme(localStorage.getItem("theme"))
                        }}>light</a>
                        {/* <a >light</a> */}
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>{" "}
              {/* END MAIN MENU */}
            </div>
          </div>{" "}
          {/* END NAVIGATION MENU */}
        </div>{" "}
        {/* End header-wrapper */}
      </header>
      </>
      
    )
}


  