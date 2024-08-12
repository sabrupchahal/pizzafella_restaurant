import React from 'react'
import NavBar from './Navbar'
import Footer from './Footer'
import heroimg from './images/heroimg.jpeg'
import img1 from './images/Margherita.jpg'
import img2 from './images/peperoni.jpeg'
import img3 from './images/sweetpotato.webp'
const Home = () => {
  return (
    <div>
        <NavBar />
        
  <div className="hero">
    <img src={heroimg} alt="Restaurant Interior" />
  </div>

 
  <section className="featured-dishes">
    <h2>Featured Dishes</h2>
    <div className="dish">
      <img src={img1} alt="Margherita Pizza" />
      <h3>Margherita Pizza</h3>
      <p>Classic tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil.</p>
    </div>

    <div className="dish">
      <img src={img2} alt="Pepperoni Pizza" />
      <h3>Pepperoni Pizza</h3>
      <p>Tomato sauce, mozzarella cheese, and slices of pepperoni.</p>
    </div>

    <div className="dish">
      <img src={img3} alt="Sweet Potato fries"/>
      <h3>Sweet Potato fries</h3>
      <p>Sweet potatoe, seasoning and garlic aioli or chipotle mayo for dipping.</p>
    </div>
  </section>

 
  <section className="special-deals">
    <h2>Special Deals</h2>

    <div className="deal">
      <h3>Weekend Family Combo</h3>
      <p>Enjoy a family-sized pizza, garlic knots, and a 2-liter soda for only $25.99!</p>
    </div>

    <div className="deal">
      <h3>Lunchtime Slice Special</h3>
      <p>Grab a slice and a drink for just $5.99 every weekday from 11 AM to 2 PM!</p>
    </div>

  

  </section>
      <Footer />
    </div>
  )
}

export default Home
