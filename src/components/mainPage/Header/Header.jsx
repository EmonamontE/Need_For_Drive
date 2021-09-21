import "./header.css";

const Header = () => (
  <header className="hero_section_header">
    <div className="hero_section_header_logo">
      <span>Need for drive</span>
    </div>
    <div className="hero_section_header_location">
      <div className="hero_section_header_location_icon"></div>
      <p className="hero_section_header_location_info">Ульяновск</p>
    </div>
  </header>
);

export default Header;
