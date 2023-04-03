import "./Cart.scss";
import { useContext, useEffect, useRef, useState } from "react";
import {LocalStorageContext} from '../app/App';
import { Link } from "react-router-dom";

export function Cart() {
  const {store}= useContext(LocalStorageContext);
  const [count, setCount] = useState(0);
  const refLable = useRef(null);
  const counterProducts =( productsList )=>productsList.reduce((sum, product)=> sum + product.quantity,0);
  useEffect(()=>{
    if(store){
      setCount(counterProducts(store.products))
    }else(setCount(0));
  }, [store]);

  useEffect(()=>{
    count>0?refLable.current.style.color ="#FF0404"  :refLable.current.style.color ="#274c5b"
  }, [count]);


  return (
    <div className="header__cart cart">
      <Link to="cart" className="cart__link">
        <div className="cart__icon"></div>
        <p className="cart__lable"> Cart 
        <span ref={refLable}>({count})</span></p>
      </Link>
    </div>
  );
}
