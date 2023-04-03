import "./Cart.scss";
import { useContext } from "react";
import {LocalStorageContext} from '../app/App';
import { Link } from "react-router-dom";

export function Cart({count}) {
  const {store }= useContext(LocalStorageContext);
  const counterProducts =( productsList )=>productsList.reduce((sum, product)=> sum + product.quantity,0);
  return (
    <div className="header__cart cart">
      <Link to="cart" className="cart__link">
        <div className="cart__icon"></div>
        <p className="cart__lable"> Cart 
        <span  style={{color: count? "#274c5b": "#FF0404"}}>({store? counterProducts(store.products) : 0})</span></p>
      </Link>
    </div>
  );
}
