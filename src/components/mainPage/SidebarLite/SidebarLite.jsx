import styles from "./sidebarLite.module.css"

const SidebarLite = (props) => (
  <div className={ styles.sidebar_lite }>
    { !props.isOpen && <button className={ styles.ham_button } onClick={props.menuOpenHendler}></button> } 
  </div>
);

export default SidebarLite;
