import "./Logo.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/header/logo.png";

export function Logo() {
  return (
    <>
      <Link to="" className="logo">
        <img src={logo} className="logo__img" alt="logo" />
        <span className="logo__text">Organick</span>
      </Link>
    </>
  );
}
