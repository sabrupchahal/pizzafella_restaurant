import React from 'react'
import NavBar from './Navbar'
import Footer from './Footer'
import img1 from './images/headchef.jpg'
import img2 from './images/chef2.jpg'
import img3 from './images/team.png'
const About = () => {
  return (
    <>
        <NavBar />
        
  <section className="about-content">
    <h2>About Us</h2>
    <p>Welcome to Pizza heaven , where we serve delicious and carefully crafted meals with a touch of culinary expertise. Our commitment is to provide a delightful dining experience for our valued customers.</p>

    <p>Our chefs use only the freshest ingredients to create mouth-watering dishes that cater to various tastes. Whether you're a fan of traditional flavors or seeking a modern twist, our menu has something special for everyone.</p>
  </section>


  <section className="team">
    <h3>Meet Our Team</h3>

    <div class="team-member">
      <img src={img1} alt="Team Member 1"/>
      <h4>John Doe</h4>
      <p>Founder & Chef</p>
    </div>

    <div className="team-member">
      <img src={img2} alt=" Team Member-2"/>
      <h4>Jane Smith</h4>
      <p>Head of Operations</p>
    </div>
    <div className="team-member">
      <img src={img3} alt="Whole Team"/>
      <h4>Our Whole Team</h4>
      <p>Responsible to serve taste</p>
    </div>
   

  </section>
      <Footer />
    </>
  )
}

export default About
