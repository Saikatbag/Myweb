import React, { Component } from 'react'
import { ContactUs } from './ContactUs'
import './css/contact.css'
export default class Contact extends Component {
  render() {
    return (
      
      <div className=''>
        <div className='centar p-5'>
        <h1>Saikat Bag</h1>
        <p> Email : saikatbag10@gmail.com </p>
        <p> Phone Number: 9832854600, 8101440420 </p>
        <br/>
        <ContactUs/>
        
        </div>

      </div>
    )
  }
}
