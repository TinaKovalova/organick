import "./Cart.scss";
import { useContext, useEffect, useState } from "react";
import {LocalStorageContext} from '../app/App';
import { Link } from "react-router-dom";

export function Cart() {
  const {store }= useContext(LocalStorageContext);
  const [count, setCount] = useState(0);
  const counterProducts =( productsList )=>productsList.reduce((sum, product)=> sum + product.quantity,0);
  useEffect(()=>{
    if(store){
      setCount(counterProducts(store.products))
    }else(setCount(0));
  }, [store])

  return (
    <div className="header__cart cart">
      <Link to="cart" className="cart__link">
        <div className="cart__icon"></div>
        <p className="cart__lable"> Cart 
        <span  style={{color: count > 0 ? "#FF0404" : "#274c5b"}}>({count})</span></p>
      </Link>
    </div>
  );
}
