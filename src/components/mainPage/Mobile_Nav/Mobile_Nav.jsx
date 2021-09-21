import "./mobile_nav.css"

const Mobile_Nav = (props) => (
  <div className="mobile_nav">
    <button className="menu_btn" onClick={props.menuOpenHendler}></button>
  </div>
);

export default Mobile_Nav;
