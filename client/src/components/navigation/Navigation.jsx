import "./Navigation.scss";
import { HashLink as Link } from 'react-router-hash-link';

export function Navigation(props) {

  const hanleNavigation= ()=> {
    document.querySelector('.header__navigation').classList.remove('active');
    document.querySelector('.burger-icon').classList.remove('active');
  }
  return (
    <nav className={(props.className || "") + " navigation"}>
      <ul className="navigation__list" onClick={hanleNavigation}>
        <li className="navigation__item">
          <Link to="/#presentation" smooth>Home</Link>
        </li>
        <li className="navigation__item">
          <Link to="/#about" smooth>About</Link>
        </li>
        <li className="navigation__item">
          <Link to="/" smooth>Pages</Link>
        </li>
        <li className="navigation__item">
          <Link to="/#shop" smooth>Shop</Link>
        </li>
        <li className="navigation__item">
          <Link to="/#projects" smooth>Projects</Link>
        </li>
        <li className="navigation__item">
          <Link to="/#news" smooth>News</Link>
        </li>
      </ul>
    </nav>
  );
}
