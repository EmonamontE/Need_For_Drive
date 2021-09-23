import styles from "./sidebarLite.module.css"

const SidebarLite = ({ isOpen, menuOpenHendler }) => (
  <div className={ styles.sidebar_lite }>
    { !isOpen && <button className={ styles.ham_button } onClick={ menuOpenHendler }></button> } 
  </div>
);

export default SidebarLite;
