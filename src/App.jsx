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
              <button>Web Design</button>
              <button>Graphics</button>
              <button>Web Coding</button>
            </div>
              <div className="menu__left__item">
                <span className='span__head'>Project Title</span>
                <span className='span__head'>Budget</span>
                <span className='span__head'>Deadline</span>
                <span className='span__head'>Client</span>
              </div>
              <div className="menu__left__item">
                <span className='span__green'>Website Redesign</span>
                <span>$1,500 to $2,200</span>
                <span>2022 Dec 12</span>
                <span>Web Biz</span>
              </div>
              <div className="menu__left__item">
                <span className='span__green'>Website Redesign</span>
                <span>$1,500 to $2,200</span>
                <span>2022 Dec 12</span>
                <span>Web Biz</span>
              </div>
              <div className="menu__left__item">
                <span className='span__green'>Website Redesign</span>
                <span>$1,500 to $2,200</span>
                <span>2022 Dec 12</span>
                <span>Web Biz</span>
              </div>
              <div className="menu__left__item">
                <span className='span__green'>Website Redesign</span>
                <span>$1,500 to $2,200</span>
                <span>2022 Dec 12</span>
                <span>Web Biz</span>
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
        <section>
          <img src="https://templatemo.com/templates/templatemo_574_mexant/assets/images/calculator-image.png" />
          <div className="containerOne">
            <h6>YOUR FREEDOM</h6>
            <h4>Get A Financial Plan</h4>
            <div className="inp">
              <div className="inp1">
              <p>Your Name</p>
              <input type="text"/>
              </div>
              <div className="inp1">
              <p>Your Email</p>
              <input type="text" name="" id="" />
              </div>
            </div>
            <div className="inp1">
            <p>Subject</p>
            <input type="text" name="" id="" />
            </div>
            <div className="inp1">
            <p>Your Reason</p>
            <select name="" id="">
              <option value="" selected>Choose an Option</option>
              <option value="">Choose an Option</option>
              <option value="">Choose an Option</option>
            </select>
            </div>
            <button>Submit Now</button>
          </div>
        </section>
    </>
  )
}
