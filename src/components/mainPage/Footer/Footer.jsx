import styles from "./footer.module.css";

const Footer = () => (
  <footer className={ styles.footer }>
    <p className={ styles.badge }>© 2016-2019 «Need for drive»</p>
    <a href="#" className={ styles.phone }>8 (495) 234-22-44</a>
  </footer>
);

export default Footer;
