import "./Logo.scss";
import { HashLink as Link } from 'react-router-hash-link';
import logo from "../../assets/header/logo.png";

export function Logo() {
  return (
    <>
      <Link to="/#presentation" className="logo">
        <img src={logo} className="logo__img" alt="logo" />
        <span className="logo__text">Organick</span>
      </Link>
    </>
  );
}
