import { useState } from 'react';
import HamMenu from '../../components/MainPage/HamMenu/HamMenu';
import Header from '../../components/MainPage/Header/Header';
import Content from '../../components/MainPage/Content/Content';
import Footer from '../../components/MainPage/Footer/Footer';
import SidebarLite from '../../components/MainPage/SidebarLite/SidebarLite';
import Sidebar from '../../components/MainPage/Sidebar/Sidebar';
import Slider from '../../components/MainPage/Slider/Slider';

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
          isOpen={ isOpen }
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
