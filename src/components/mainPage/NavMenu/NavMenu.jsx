import React from 'react';
import './navMenu.css'

const NavMenu = ({toggleMenu}) => (
  <div className="menu_container">
    <div className="button_section">
      <button className="X_btn" onClick={toggleMenu}></button>
    </div>
    <section className="links_section">
      <div className="on_page_links">
        <p>ПАРКОВКА</p>
        <p>СТРАХОВКА</p>
        <p>БЕНЗИН</p>
        <p>ОБСЛУЖИВАНИЕ</p>
      </div>
      <div className="social_links">
        <a href="#">
          <div className="telegram_icon"></div>
        </a>
        <a href="#">
          <div className="fb_icon"></div>
        </a>
        <a href="#">
          <div className="instagram_icon"></div>
        </a>
      </div>
    </section>
    <section className="empty_section"></section>
  </div>
);

export default NavMenu;
