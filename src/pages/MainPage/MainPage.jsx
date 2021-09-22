import { useState } from 'react';
import HamMenu from '../../components/mainPage/HamMenu/HamMenu';
import Header from '../../components/mainPage/Header/Header';
import Content from '../../components/mainPage/Content/Content';
import Footer from '../../components/mainPage/Footer/Footer';
import SidebarLite from '../../components/mainPage/SidebarLite/SidebarLite';
import Sidebar from '../../components/mainPage/Sidebar/Sidebar';
import Slider from '../../components/mainPage/Slider/Slider';

import styles from './mainPage.module.css';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      {isOpen && <HamMenu toggleMenu={ toggleMenu } />}
      <div className={ styles.container }>
        <SidebarLite
          menuOpenHendler={ toggleMenu }
          isOpen={isOpen}
        />
        <Sidebar menuOpenHendler={ toggleMenu } />
        <section className={ styles.content_section }>
          <Header/>
          <Content/>
          <Footer/>
        </section>
        <section className={ styles.slider_section }>
          <Slider/>
        </section>
      </div>
    </div>
  );
}

export default MainPage;
