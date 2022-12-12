import React from 'react'

const contact = () => {
    return (
        <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row mt-1">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
              <a href="https://www.google.com/maps/place/Cincinnati,+OH/@39.1365225,-84.680487,11z/data=!3m1!4b1!4m5!3m4!1s0x884051b1de3821f9:0x69fb7e8be4c09317!8m2!3d39.1031182!4d-84.5120196" target='blank'><i class='bx bx-current-location' ></i></a>
                <h4>Location:</h4>
                <p>Atlanta, Georgia, United States</p>
              </div>

              <div className="email">
              <a href="mailto: chitneninikhil17@gmail.com"><i class='bx bx-mail-send' ></i></a>
                <h4>Email:</h4>
                <p>chitneninikhil17@gmail.com</p>
              </div>

              <div className="phone">
                <a href="tel:4708459172"><i className="bx bxs-phone"></i></a>
                <h4>Call:</h4>
                <p>+1 4708459172</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>


    )
}

export default contact
