import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_n5xwtwf', form.current, '3qF-mOEsRZSHP39Ct')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    
      <form ref={form} onSubmit={sendEmail}>
        <div className='form-group'>
            <div className='form-group'>
      <label>Name : </label>
      <input type="text" name="name" />
      </div>
      <div class="form-group">
      <label>Email : </label>
      <input type="email" name="email" />
      </div>
      <div class="form-group">
      <label>Message : </label>
      <textarea name="message" />
      </div>
      <br/>
      <input type="submit" value="Send" />
    </div>
    </form>
  
  );
};