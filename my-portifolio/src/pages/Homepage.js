import React from 'react'
import { Link } from 'react-router-dom'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { fontSize, padding } from '@mui/system';
export default function Homepage() {
  return (
    <div name="home"
    className>
      <div className>
      <div className>

      </div>
<div className='kk'>
      <h1 >Hello,</h1>
      <h2 >I'm Martin kavindu</h2>
<h3 > I'm a web- developer</h3>
     <div>
      <p>
        Currently graduated in B.S.c Computer Science at school of applied Science
        at Pwani University ,Kilifi Kenya.<br/> I love to work on web application using technologies like
          React js,PHP,CSS,HTML and MYSQL db.
          </p>
          </div> 
          <button style={{
        backgroundColor: 'white',
        border: "none",
        borderRadius: "20px",
  
        
        
      }}>
          <Link
            to="about"
            smooth
            duration={500}
            className
          >About Me
          </Link>
          </button>
        </div>
        <div>
        </div>
        <footer class="bg-dark-1">
  <section id="footer" class="py-5">
    <div class="container text-center">
      <a href="#" class="twitter"></a>
      <a href="#" class="linkedin"></a>
      <a href="#" class="facebook"></a>
      <a href="#" class="skype"></a>
      <a href="#" class="flickr"></a>
      <h6 class="m-0 mt-4 text-center text-black text-capitalize">Copyright &copy; 2023 designed by martin kavindu</h6>
    </div>
  </section>
</footer>
</div>
</div>

  )
}