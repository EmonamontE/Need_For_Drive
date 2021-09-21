import "./main_nav.css";

const Main_Nav = (props) => (
  <nav className="main_nav">
    <button className="menu_btn" onClick={props.menuOpenHendler}></button>
    <button className="language_btn">Eng</button>
  </nav>
);

export default Main_Nav;
