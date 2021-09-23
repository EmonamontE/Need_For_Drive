import { useState } from 'react';

import styles from './modalMenu.module.css'

const ModalMenu = ({ toggleMenu }) => {
  const [state, setState] = useState(true);

  const stateHandler = () => setState(!state);
  const language = state ? 'Eng' : 'Рус';

  return(
    <div className={ styles.container }>
      <div className={ styles.button_section }>
        <button
          className={ styles.close_button } onClick={ toggleMenu }
        />
      </div>
      <section className={ styles.links_section }>
          <div className={ styles.content }>
            <div className={ styles.page_links }>
              <a href="#" className={ styles.link }>ПАРКОВКА</a>
              <a href="#" className={ styles.link }>СТРАХОВКА</a>
              <a href="#" className={ styles.link }>БЕНЗИН</a>
              <a href="#" className={ styles.link }>ОБСЛУЖИВАНИЕ</a>
            </div>
            <div className={ styles.social_links }>
              <a href="#">
                <div className={ styles.telegram_icon }></div>
              </a>
              <a href="#">
                <div className={ styles.fb_icon }></div>
              </a>
              <a href="#">
                <div className={ styles.instagram_icon }></div>
              </a>
            </div>
          </div>
        <button
          className={ styles.language_btn }
          onClick={ stateHandler }
        >
          { language }
        </button>
      </section>
      <section className={ styles.empty_section }></section>
    </div>
  );
};

export default ModalMenu;
