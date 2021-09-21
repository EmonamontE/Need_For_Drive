import { useState } from 'react';
import NavMenu from '../../components/mainPage/NavMenu/NavMenu';
import Header from '../../components/mainPage/Header/Header';
import Main from '../../components/mainPage/Main/Main';
import Footer from '../../components/mainPage/Footer/Footer';
import Mobile_Nav from '../../components/mainPage/Mobile_Nav/Mobile_Nav';
import Main_Nav from '../../components/mainPage/Main_Nav/Main_Nav';
import Slider from '../../components/mainPage/Slider/Slider';

import './main_page.css';

const Main_Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className={ isOpen ? 'ham_menu_opened' : 'ham_menu_closed'}>
        <NavMenu toggleMenu={toggleMenu} />
      </div>
      <div className="container">
        <Mobile_Nav menuOpenHendler={toggleMenu} />
        <Main_Nav menuOpenHendler={toggleMenu} />
        <section className="hero_section">
          <Header/>
          <Main/>
          <Footer/>
        </section>
        <section className="slider_section">
          <Slider/>
        </section>
      </div>
    </div>
  );
}

export default Main_Page;
