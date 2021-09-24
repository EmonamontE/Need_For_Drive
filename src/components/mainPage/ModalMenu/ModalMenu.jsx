import styles from './modalMenu.module.css'

const ModalMenu = ({ menuOpenHandler, languageHandler, language }) => {
  return(
    <div className={ styles.container }>
      <div className={ styles.button_section }>
        <button
          className={ styles.close_button } onClick={ menuOpenHandler }
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
                <div className={ styles.telegram_icon } />
              </a>
              <a href="#">
                <div className={ styles.fb_icon } />
              </a>
              <a href="#">
                <div className={ styles.instagram_icon } />
              </a>
            </div>
          </div>
        <button
          className={ styles.language_btn }
          onClick={ languageHandler }
        >
          { language }
        </button>
      </section>
      <section className={ styles.empty_section }></section>
    </div>
  );
};

export default ModalMenu;
