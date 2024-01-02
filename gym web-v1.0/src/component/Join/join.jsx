import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './join.css';

const join = () => {
    const form = useRef()
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_brq3qcm', 'template_4jvhpym', form.current, 'wUQlmFZ7fOkH8ctlD')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='Join' id='join-us'>
        <div className='left-j'>
            <hr />
            <div>
                <span className='stroke-text'>READY TO </span>
                <span>LEVEL UP</span>
            </div>
            
            <div>
                <span>YOUR BODY </span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className='left-j'>
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type='email' name='user_email' placeholder='Enter your email ...' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default join