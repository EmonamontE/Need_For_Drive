import { useState } from "react";
import styles from "./sidebar.module.css";

const Sidebar = ({ menuOpenHendler }) => {
  const [state, setState] = useState(true);

  const stateHandler = () => setState(!state);
  const language = state ? 'Eng' : 'Рус';

  return(
    <nav className={ styles.sidebar }>
      <button
        className={ styles.sandwich_btn }
        onClick={ menuOpenHendler }
      />
      <button
        className={ styles.language_btn }
        onClick={ stateHandler }
      >
        {language}
      </button>
    </nav>
  );
}

export default Sidebar;
