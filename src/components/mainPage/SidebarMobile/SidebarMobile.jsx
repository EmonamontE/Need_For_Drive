import styles from "./sidebarMobile.module.css"

const SidebarMobile = ({ isOpen, menuOpenHendler }) => (
  <div className={ styles.sidebar_lite }>
    { !isOpen && <button className={ styles.ham_button } onClick={ menuOpenHendler }></button> } 
  </div>
);

export default SidebarMobile;
