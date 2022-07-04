import React from 'react'
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import blog4 from '../assets/blog4.jpg'
import blog5 from '../assets/blog5.jpg'
import blog6 from '../assets/blog6.jpg'
import blog7 from '../assets/blog7.jpg'
import blog8 from '../assets/blog8.jpg'
import blog9 from '../assets/blog9.jpg'
import blog10 from '../assets/blog10.jpg'
import ScrollToTopBtn from '../Components/ScrollToTopBtn'

const BlogPage = () => {
  return (
    <div className='blog'>
      <div className='container blog-container'>
        <div className='blog-1'>
          <div className='left'>
            <img src={blog1} alt="blog"/>
            <div className='left-blog1-info'>
              <h3>Featured</h3>
              <h4>Wizard Actor Has Another Digital Comics Role – Featured Slideshow Post</h4>
              <span className='title'>Hot Rumours</span> <span className='date'>February 5, 2022</span>
              <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus <br/> luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
            </div>
          </div>
          <div className='right'>
            <h3>What's hot today</h3>
            <div className='right-box'>
              <img src={blog8} alt="blog" style={{width: "115px", height: "65px"}}/>
              <div className='right-info'>
                <h4>Saints, Leicester agree <br/> Maddison fee</h4>
                <span className='title'>Trailers</span> <span className='date'>February 5, 2022</span>
              </div>
            </div>
            <div className='right-box'>
              <img src={blog9} alt="blog" style={{width: "115px", height: "65px"}}/>
              <div className='right-info'>
                <h4>Saints, Leicester agree <br/> Maddison fee</h4>
                <span className='title'>Trailers</span> <span className='date'>February 5, 2022</span>
              </div>
            </div>
            <div className='right-box'>
              <img src={blog10} alt="blog" style={{width: "115px", height: "65px"}}/>
              <div className='right-info'>
                <h4>Saints, Leicester agree <br/> Maddison fee</h4>
                <span className='title'>Trailers</span> <span className='date'>February 5, 2022</span>
              </div>
            </div>
          </div>
        </div>

        <div className='blog2'>
          <div className='left'>
            <div className='left-box'>
              <img className='img' src={blog2} alt="blog"/>
              <div className='left-blog2-info'>
                <h3>World Starts With Word Peace</h3>
                <span className='title'>Trailers</span> <span className='date'>February 5, 2022</span>
                <p>The process of getting a movie off of the ground is a  lengthy<br/> endeavor, with casting standing out as one</p>
              </div>
            </div>
            <div className='left-box'>
              <img src={blog3} alt="blog"/>
              <div className='left-blog2-info'>
                <h3>The Long Run</h3>
                <span className='title'>Trailers</span> <span className='date'>February 5, 2022</span>
                <p>The process of getting a movie off of the ground is a lengthy <br/>endeavor with casting standing out as one</p>
              </div>
            </div>
            <div className='left-box'>
              <img src={blog4} alt="blog"/>
              <div className='left-blog2-info'>
                <h3>The 6 Best Hard Movies</h3>
                <span className='title'>Trailers</span> <span className='date'>February 5, 2022</span>
                <p>The process of getting a movie off of the ground is a lengthy<br/> endeavor with casting standing out as one</p>
              </div>
            </div>
            <div className='left-box'>
              <img src={blog5} alt="blog"/>
              <div className='left-blog2-info'>
                <h3>Dark Night</h3>
                <span className='title'>Trailers</span> <span className='date'>February 5, 2022</span>
                <p>The process of getting a movie off of the ground is a lengthy endeavor,<br/> with casting standing out as one</p>
              </div>
            </div>
            <div className='left-box'>
              <img src={blog6} alt="blog"/>
              <div className='left-blog2-info'>
                <h3>Martin Absence Affects</h3>
                <span className='title'>Trailers</span> <span className='date'>February 5, 2022</span>
                <p>The process of getting a movie off of the ground is a lengthy endeavor,<br/> with casting standing out as one</p>
              </div>
            </div>
            <div className='left-box'>
              <img src={blog7}/>
              <div className='left-blog2-info'>
                <h3>Possible Callback</h3>
                <span className='title'>Trailers</span> <span className='date'>February 5, 2022</span>
                <p>The process of getting a movie off of the ground is a lengthy endeavor,<br/> with casting standing out as one</p>
              </div>
            </div>
          </div>
          <div className='right'>
            <h2>Hot Rumors</h2>
            <div className='right-blog2-info'>
              <img src={blog7} alt="blog"/>
              <h3>Dark Night</h3>
              <span className='title'>Trailers</span> <span className='date'>February 5, 2022</span>
            </div>
            <div className='right-blog2-info'>
              <img src={blog2} alt="blog" />
              <h3>Martin Absence Affects</h3>
              <span className='title'>Trailers</span> <span className='date'>February 5, 2022</span>
            </div>
            <div className='right-blog2-info'>
              <img src={blog9} alt="blog" />
              <h3>The 6 Best Hard Movies</h3>
              <span className='title'>Trailers</span> <span className='date'>February 5, 2022</span>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopBtn/>
    </div>
  )
}

export default BlogPage