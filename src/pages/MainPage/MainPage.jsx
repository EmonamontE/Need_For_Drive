import { useState } from 'react';
import ModalMenu from '../../components/MainPage/ModalMenu/ModalMenu';
import Header from '../../components/MainPage/Header/Header';
import Content from '../../components/MainPage/Content/Content';
import Footer from '../../components/MainPage/Footer/Footer';
import SidebarMobile from '../../components/MainPage/SidebarMobile/SidebarMobile';
import Sidebar from '../../components/MainPage/Sidebar/Sidebar';
import Slider from '../../components/MainPage/Slider/Slider';

import styles from './mainPage.module.css';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={ styles.container }>
      {isOpen && <ModalMenu toggleMenu={ toggleMenu } />}
      <SidebarMobile
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
  );
}

export default MainPage;
