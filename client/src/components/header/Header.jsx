import { Cart } from "../cart/Cart";
import { Logo } from "../logo/Logo";
import { Navigation } from "../navigation/Navigation";
import { Search } from "../search/Search";
import "./Header.scss";

export function Header() {
  return (
    <header className="header">
      <Logo />
      <Navigation className="header__navigation" />
      <div className="header__user-panel">
        <Search className="header__search-panel" />
        <Cart className="header__cart" />
      </div>
    </header>
  );
}
