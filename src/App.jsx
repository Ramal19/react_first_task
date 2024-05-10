import './App.css'

import React from 'react'

export default function App() {

  return (
    <>
      <div className="container">
        <h6>ABOUT US</h6>
        <h4 className='h4'>Know Us Better</h4>
        <div className="menu">
          <div className="menu__left">
            <div className="btn">
              <button className='btnOne'>Web Design</button>
              <button className='btnTwo'>Graphics</button>
              <button className='btnThree'>Web Coding</button>
            </div>
            <div className="menu__left__item__btn">
              <div className="menu__left__item">
                <span className='span__head'>Project Title</span>
                <span className='span__head'>Budget</span>
                <span className='span__head'>Deadline</span>
                <span className='span__head'>Client</span>
              </div>
              <div className="menu__left__item">
                <span className='span__green'>Website Redesign</span>
                <span className='spanNone'>$1,500 to $2,200</span>
                <span className='spanNone'>2022 Dec 12</span>
                <span className='spanNone'>Web Biz</span>
                <span className='span__flex'>$1,500 to $2,200</span>
                <span className='span__flex'>2022 Dec 12</span>
                <span className='span__flex'>Web Biz</span>
              </div>
              <div className="menu__left__item">
                <span className='span__green'>Website Renovation</span>
                <span>$1,500 to $2,200</span>
                <span>2022 Dec 12</span>
                <span>Web Biz</span>
              </div>
              <div className="menu__left__item">
                <span className='span__green'>Marketing Plan</span>
                <span>$1,500 to $2,200</span>
                <span>2022 Dec 12</span>
                <span>Web Biz</span>
              </div>
              <div className="menu__left__item">
                <span className='span__green'>All-new Website</span>
                <span>$1,500 to $2,200</span>
                <span>2022 Dec 12</span>
                <span>Web Biz</span>
              </div>
          </div>
            </div>
          <div className="menu__right">
            <h4>Please tell us about your idea and how you want it to be</h4>
            <p>You are allowed to use this template for your websites. You are <span>NOT allowed</span> to redistribute the template ZIP file on any other template websites.
            <br /><br />
              Thank you for downloading and using our templates. Please tell your friends about our website.</p>
              <button>Discover More</button>
          </div>
        </div>
      </div>
    </>
  )
}
