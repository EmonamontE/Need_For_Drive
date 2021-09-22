import styles from './header.module.css'; 

const Header = () => (
  <header className={ styles.header }>
    <div className={ styles.logo }>
      <span>Need for drive</span>
    </div>
    <div className={ styles.location }>
      <div className={ styles.location_icon }></div>
      <p className={ styles.location_info }>Ульяновск</p>
    </div>
  </header>
);

export default Header;
