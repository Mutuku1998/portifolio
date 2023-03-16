import React from "react";


const About = () => { 
  return (
    <div>
      <div className = "container">
        <div className ="top-section">
          <div className = "left">
              <p className = "about__subheading">
              Hi. I am <span>Martin Kavindu</span>
              </p>
              <h2 className="about__heading">
                A full stack web developer
              </h2>
            <div className="about__info">
              <p>
                I am from Makueni county,Kenya. A place of beauty and nature. since my childhood,
                i love art and design . I always try to design stuffs with my unique point of view to help the society
                <br/> <br/>
              A software developer with experience in building Responsive and
                Scalable Web apps using technologies : react js, CSS,HTML and PHP. 
                <br/> <br/>
                I am well-knowledged in UI/UX principles and
                practices. In addition to software development, I am also a
                technical writer--simplifying topics/concepts on the web.

              </p>

            </div>
      <button btnText="Download Resume" btnLink="#">
      Download CV </button>
            </div>

            
          </div>
        </div>
      </div>
  
  );
};
export default About;