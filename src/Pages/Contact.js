import React from 'react'
import contact from '../assets/contact.jpg'
import {MdLocationOn} from 'react-icons/md'
import {AiTwotonePhone} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import ScrollToTopBtn from '../Components/ScrollToTopBtn'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-img' style={{background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${contact})`}}>
        <div className='container img-container'>
          <h1>Contact Us</h1>
          <p>We are here in 24/7</p>
          <div className='line'></div>
        </div>
      </div>
      <div className='container contact-container'>

        <div className='form'>
          <h2>ContactForm</h2>
          <div className='line'></div>
          <div className='inputs'>
          <input type="text" className='text' placeholder='Your name'/>
          <input type="email" className='email' placeholder='Your email'/>
          </div>
          <input type="text" className='subject' placeholder='Enter title'/>
          <textarea placeholder='Enter your message'></textarea>
        </div>

        <div className='info'>
          <h2>Information</h2>
          <div className='line'></div>
          <div className='info-box'>
            <p><b>Find solutions :</b>to common problems, or get help from a support agent industry's standard.</p>
            <div className='box'>
              <p><span><MdLocationOn/></span> <b>Address: </b> Stockholm, Sweden </p>
              <p><span><AiTwotonePhone/></span> <b>Phone: </b>(09)555 123 000 </p>
              <p><span><MdEmail/></span> <b>Email: </b>movieflix@gmail.com </p>
            </div>
          </div>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130266.40104424024!2d17.84162932554248!3d59.32606644677808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm!5e0!3m2!1ssv!2sse!4v1656873793923!5m2!1ssv!2sse" loading="lazy" ></iframe>

    <ScrollToTopBtn/>
    </div>
  )
}

export default Contact