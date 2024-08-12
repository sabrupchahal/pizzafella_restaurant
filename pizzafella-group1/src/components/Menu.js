//created by Paramjeet kaur
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import img1 from './images/Margherita.jpg'
import img2 from './images/peperoni.jpeg'
 import img3 from './images/veggedelight.avif'
 import img4 from './images/MediterraneanMarvelPizza.webp'
 import img5 from './images/bbqchicken.jpg'
 import img6 from './images/garlicknots.jpg'
 import img7 from './images/MozzarellaSticks.jpeg'
 import img8 from './images/sweetpotato.webp'
 import img9 from './images/caesersalad.webp'
  import img10 from './images/soda.jpg'
  import img11 from './images/SoftDrinks.jpg'
  import img12 from './images/icedtea.jpg'
const Menu = () => {
  return (
    <>
      <Navbar/>
      
  <section className="menu">
    <h2>Our Menu</h2>

  
    <section className="menu-category">
      <h3>Pizzas</h3>

      <div className="menu-item">
        <img src={img1} alt="Margherita Pizza"/>
        <div className="item-details">
          <h4>Margherita Pizza</h4>
          <p>Classic tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil.</p>
        </div>
        <p className="item-price">$12.99</p>
      </div>

      <div className="menu-item">
        <img src= {img2} alt="Pepperoni Pizza"/>
        <div className="item-details">
          <h4>Pepperoni Pizza</h4>
          <p>Tomato sauce, mozzarella cheese, and slices of pepperoni.</p>
        </div>
        <p className="item-price">$14.99</p>
      </div>
      \  <div className="menu-item">
        <img src= {img3} alt="Vegge Delight Pizza"/>
        <div className="item-details">
          <h4>Vegge Delight Pizza</h4>
          <p>Tomato sauce, mozzarella cheese, mushroom and red onions.</p>
        </div>
        <p className="item-price">$10.99</p>
      </div>
      <div className="menu-item">
        <img src= {img4} alt="Mediterranean Marvel Pizza"/>
        <div className="item-details">
          <h4>Mediterranean Marvel Pizza</h4>
          <p>Olive oil, Feta cheese, spinach,oegano and garlic base.</p>
        </div>
        <p className="item-price">$13.99</p>
      </div>
      <div className="menu-item">
        <img src={img5} alt="BBQ Chicken Bliss Pizza"/>
        <div className="item-details">
          <h4>BBQ Chicken Bliss</h4>
          <p>BBQ souce base, Mozzarella cheese, grilled chicken,redn onions and BBQ drizzle.</p>
        </div>
        <p className="item-price">$18.99</p>
      </div>


    </section>

  
    <section className="menu-category">
      <h3>Sides</h3>

      <div className="menu-item">
        <img src={img6} alt="Garlic Knots"/>
        <div className="item-details">
          <h4>Garlic Knots</h4>
          <p>Freshly baked knots brushed with garlic butter and sprinkled with parsley.</p>
        </div>
        <p className="item-price">$5.99</p>
      </div>

      <div className="menu-item">
        <img src= {img7} alt="Mozzarella Sticks"/>
        <div className="item-details">
          <h4>Mozzarella Sticks</h4>
          <p>Crispy on the outside, gooey on the inside. Served with marinara sauce.</p>
        </div>
        <p className="item-price">$7.99</p>
      </div>
      <div className="menu-item">
        <img src= {img8} alt="Sweet Potato fries"/>
        <div className="item-details">
          <h4>Sweet Potato fries</h4>
          <p>Sweet potatoe, seasoning and garlic aioli or chipotle mayo for dipping.</p>
        </div>
        <p className="item-price">$7.99</p>
      </div>
      <div className="menu-item">
        <img src= {img9} alt="Caeser Salad"/>
        <div className="item-details">
          <h4>Caeser Salad</h4>
          <p>Romaine lettuce, caeser dressing, Croutons.</p>
        </div>
        <p className="item-price">$9.99</p>
      </div>

    

    </section>


    <section className="menu-category">
      <h3>Drinks</h3>

      <div className="menu-item">
        <img src= {img10} alt="Soda"/>
        <div className="item-details">
          <h4>Soda</h4>
          <p>Choose from a variety of refreshing sodas.</p>
        </div>
        <p className="item-price">$2.49</p>
      </div>
      <div className="menu-item">
        <img src={img11} alt="Soda"/>
        <div className="item-details">
          <h4>Soft Drinks</h4>
          <p>Choose from a variety of refreshing soft drinks.</p>
        </div>
        <p className="item-price">$2.49</p>
      </div>

      <div className="menu-item">
        <img src={img12} alt="Iced Tea"/>
        <div className="item-details">
          <h4>Iced Tea</h4>
          <p>Cool off with our freshly brewed iced tea.</p>
        </div>
        <p className="item-price">$3.99</p>
      </div>



    </section>
  </section>
      <Footer/>
    </>
  )
}

export default Menu