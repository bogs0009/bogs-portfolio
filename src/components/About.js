import React from 'react';
import './About.css'; // Create this CSS file
/* import profileImage from 'public/images/rr-photo.jpg'; // Replace with your image path */
import { Element } from 'react-scroll';

const About = () => {
 return (
   <Element name="about">
    <section className="about-section">
     <div className="about-container">
       {/* LEFT: Text */}
       <div className="about-text">
         <h2 className="about-greeting">Hi, I'm Bogs</h2>
           <p className="about-description">
           As a visual translator, I take your complex ideas and turn them into simple, beautiful designs that people instantly connect with.
           My goal is to help great businesses tell their powerful story, and stand out to the noise. My work isn't just about making things look good, it's about making your audience feel something and understand your message clearly. I create designs that solve the problem of being overlooked, helping your brand to stand out and build trust.
           Let's work together to tell your story in a way that no one can ignore.
           <br />
           <br />
           </p>
         <h2 className="about-signature">John Ryan Silvestre</h2>
           <p className="about-role">Graphic Designer</p>
       </div>


       {/* RIGHT: Image */}
       <div className="about-image">
         <img src="/images/bogs.png" alt="RR Silvestreix" />
       </div>
     </div>
    </section>
   </Element>
 );
};


export default About;
