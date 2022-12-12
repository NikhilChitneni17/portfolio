import React from 'react'

import profile from '../images/nikhil.jpg'

const about = () => {
    return (
        <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About</h2>
          
        </div>
        

        <div className="row">
          <div className="col-lg-4">
            <img src={profile} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Full Stack Developer</h3>
            
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>11 May 1999</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span><a href="http://nikhilchitneni.netlify.app" target="_blank">http://nikhilchitneni.netlify.app</a></span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+1-(470)-845-9172</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Atlanta, Georgia</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master's</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>chitneninikhil17@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
    
       
    )
}

export default about
