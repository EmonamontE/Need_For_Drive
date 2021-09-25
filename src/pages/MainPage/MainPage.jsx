import { useState } from 'react';
import ModalMenu from '../../components/MainPage/ModalMenu/ModalMenu';
import Sidebar from '../../components/MainPage/Sidebar/Sidebar';
import Header from '../../components/MainPage/Header/Header';
import Content from '../../components/MainPage/Content/Content';
import Footer from '../../components/MainPage/Footer/Footer';
import Slider from '../../components/MainPage/Slider/Slider';

import styles from './mainPage.module.css';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('Eng');

  const toggleMenu = () => setIsOpen(!isOpen);
  const languageHandler = () => setLanguage(language === 'Eng' ? 'Рус' : 'Eng');

  return (
    <div className={ styles.container }>
      { isOpen &&
        <ModalMenu 
          menuOpenHandler={ toggleMenu } 
          languageHandler={ languageHandler }
          language={ language }
        />
      }
      <Sidebar
        menuOpenHandler={ toggleMenu }
        languageHandler={ languageHandler }
        language={ language }
      />
      <section className={ styles.content_section }>
        <Header
          menuOpenHandler={ toggleMenu }
        />
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
