import styles from './header.module.css'; 

const Header = ({ menuOpenHandler }) => (
  <header className={ styles.header }>
    <button
      className={ styles.sandwich_btn }
      onClick={ menuOpenHandler }
    />
    <div className={ styles.header_content}>
      <h3 className={ styles.logo }>Need For Drive</h3>
      <div className={ styles.location }>
        <div className={ styles.location_icon }></div>
        <p className={ styles.location_info }>Ульяновск</p>
      </div>
    </div>
  </header>
);

export default Header;
