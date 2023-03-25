import "./Logo.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export function Logo() {
  return (
    <>
      <Link to="" className="header__logo">
        <img src={logo} className="logo__img" alt="logo" />
        <span className="logo__text">Organick</span>
      </Link>
    </>
  );
}
