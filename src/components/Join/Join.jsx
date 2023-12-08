import React, { useRef } from 'react'
import './Join.css'
import emailjs from  '@emailjs/browser'

const Join = () => {
    const form  = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_nn6v559', 'template_old5wfd', form.current, 'rOvzWrsiqEefKJGek')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
    <div className="join">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter your email adress ' />
                <button type='submit' className='btn btn-j'>Join now</button>
            </form>
        </div>
    </div>
  )
}

export default Join