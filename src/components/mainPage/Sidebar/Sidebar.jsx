import styles from "./sidebar.module.css";

const Sidebar = (props) => (
  <nav className={ styles.sidebar }>
    <button className={ styles.sandwich_btn } onClick={props.menuOpenHendler}></button>
    <button className={ styles.language_btn }>Eng</button>
  </nav>
);

export default Sidebar;
