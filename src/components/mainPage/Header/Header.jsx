import styles from './header.module.css'; 

const Header = () => (
  <header className={ styles.header }>
    <h3 className={ styles.logo }>Need for drive</h3>
    <div className={ styles.location }>
      <div className={ styles.location_icon }></div>
      <p className={ styles.location_info }>Ульяновск</p>
    </div>
  </header>
);

export default Header;
