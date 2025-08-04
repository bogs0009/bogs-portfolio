import React from 'react';
import './Contacts.css';
import { Element } from 'react-scroll';

const Contacts = () => {
  return (
    <Element name="contacts">
      <section className="contacts-section">
        <div className="contacts-container">

          {/* LEFT FORM */}
          <div className="contact-form">
            <h2>Let's Work Together</h2>
            <form action="https://formspree.io/f/mkgzvrob" method="POST">
              <input type="hidden" name="_captcha" value="false" />
              
              <label>Name</label>
              <input type="text" name="Name" placeholder="Required" required />

              <label>Email</label>
              <input type="email" name="Email" placeholder="Required" required />

              <div className="form-row">
                <div className="form-group">
                  <label>Mobile No.</label>
                  <input type="tel" name="Mobile" placeholder="Required" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Country | Location</label>
                  <input type="text" name="EventType" placeholder="Required" required />
                </div>
              </div>

              <label>Message</label>
              <textarea name="Message" rows="4" placeholder="Optional"></textarea>

              <button type="submit">Send Message</button>
            </form>

          </div>

          {/* RIGHT INFO */}
          <div className="contact-info">
            <h2>Contacts</h2>
            <ul>
              <li><i className="fas fa-phone-alt"></i> +63 975 691 4967</li>
              <li><i className="fas fa-envelope"></i> johnryansilvestre09@gmail.com</li>
              <li><i className="fas fa-map-marker-alt"></i> City of Dasmariñas, Cavite</li>
              <li><i className="fab fa-linkedin"></i> john-ryan-silvestre-0887ab1ba</li>
            </ul>
            <img
              src="/images/mycar.jpg"
              alt="Makeup and brushes"
              className="bottom-img"
            />
          </div>

        </div>
      </section>
    </Element>
  );
};

export default Contacts;
