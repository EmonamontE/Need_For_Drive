import styles from "./sidebar.module.css";

const Sidebar = ({ menuOpenHandler, languageHandler, language }) => (
  <nav className={ styles.sidebar }>
    <button
      className={ styles.sandwich_btn }
      onClick={ menuOpenHandler }
    />
    <button
      className={ styles.language_btn }
      onClick={ languageHandler }
    >
      { language }
    </button>
  </nav>
);

export default Sidebar;
