import "./Cart.scss";
import { Link } from "react-router-dom";
import cart from '../../assets/cart-icon.svg';


export function Cart() {
  return (
    <div className="header__cart cart">
      <Link to="cart" className="cart__link">
        <div className="cart__icon"></div>
        <span className="cart__lable"> Cart ({0})</span>
      </Link>
    </div>
  );
}
