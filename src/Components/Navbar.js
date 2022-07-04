import React, {useState, useEffect} from 'react'
import '../App.css';
import {RiMovie2Fill, RiSearchLine} from 'react-icons/ri'
import {IoEarth} from 'react-icons/io5'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {useGlobalContext} from '../Context'
import {Link} from 'react-router-dom'
import {BsFacebook, BsTwitter, BsGoogle, BsInstagram} from 'react-icons/bs'

const Navbar = () => {

  const {show, setShow, handleShow} = useGlobalContext();

  return (
    <nav>
      <Link to="/">
      <h3><RiMovie2Fill /> <span>MovieFlix</span></h3>
      </Link>
      <ul className={show ? "show-list" : ""}>
        <Link to="/"><li className='active-link' onClick={() => setShow(false)}>Home</li></Link>
        <Link to="/tvshow"><li onClick={() => setShow(false)}>TV Show</li></Link>
        <Link to="/search"><li onClick={() => setShow(false)}>Search</li></Link>
        <Link to="/blog"><li onClick={() => setShow(false)}>Blog</li></Link>
        <Link to="/contact"><li onClick={() => setShow(false)}>Contact</li></Link>

        <div className='nav-social'>
          <span><BsFacebook/></span>
          <span><BsTwitter/></span>
          <span><BsGoogle/></span>
          <span><BsInstagram/></span>
        </div>
      </ul>
      <div className='nav-logos'>
        <RiSearchLine className='search' style={{
          fontSize: "1.4rem", marginRight: "30px"
          }}/>
        <IoEarth className='earth' style={{color: "#e4d804", marginRight: "2px"}}/>
        <span className='en'>EN</span>
        <button className='sign'>SIGN IN</button>
        <span className='bars' onClick={handleShow}><HiOutlineMenuAlt3/></span>
      </div>
      
    </nav>
  )
}

export default Navbar