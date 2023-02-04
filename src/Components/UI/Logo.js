import "./Logo.css";
import logo from "./logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo-img" src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
