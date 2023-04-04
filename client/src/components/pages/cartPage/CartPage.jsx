import "./CartPage.scss";
import { useNavigate } from "react-router-dom";
import { ProductCardItem } from "../../../components/productCartItem/ProductCartIem";
import { useState, useContext, useEffect } from "react";
import { LocalStorageContext } from "../../app/App";
import { Button } from "../../button/Button";
import { CustomerForm } from "../../customerForm/CustomerForm";
import { addUser, addOrder } from "../../../fetches/fetches";

export function CartPage() {
  
  const { store, updateStore } = useContext(LocalStorageContext);
  const [order, setOrder] = useState(false);
  const [total, setTotal] = useState(null);
  const [userInfo, setUserInfo] = useState({userName:'',surName:'',phone:'',email:'',address:''})
  const [isFormValid, setIsFormValid] =useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const totalOrderSum = store?.products.reduce(
      (total, item) => {
        const { quantity, discountPrice, discountSum } = item;
        return {
          ...total,
          totalSum: total.totalSum + quantity * discountPrice,
          totalDiscount: total.totalDiscount + quantity * discountSum,
        };
      },
      { totalSum: 0, totalDiscount: 0 }
    );
    setTotal(totalOrderSum);
  }, [store?.products]);

  const findProductInStore = (productId) =>
    store?.products.find((item) => item.id === productId);

  const updateOrderQuantity = (id, quantity) => {
    findProductInStore(id).quantity = quantity;
    localStorage.setItem("order", JSON.stringify(store));
    updateStore();
  };

  const deleteOrderProduct = (id) => {
    const products = store?.products.filter((item) => item.id !== id);
    localStorage.setItem("order", JSON.stringify({ products }));
    updateStore();
  };

  const checkFormIsValid = (valid)=>{setIsFormValid(valid)};

  const getUserInfo = ({userName,surName,phone,email,address,message})=>{
    setUserInfo({userName,surName,phone,email,address,message});
  }

  const toOrder =(e)=>{
    if(!order){
      setOrder(order=>!order);
    }else if(order && isFormValid){
      sendOrder(userInfo);
      setOrder(order=>!order);
      localStorage.removeItem('order');
      updateStore();
      navigate("/thanks",{replace:true});
    }
  }
  const sendOrder = (userInfo)=>{
    addUser(userInfo)
    .then(res =>{
      return {insertId:res.data.insertId,message: userInfo.message}
     })
     .then(({insertId, message})=>{
      const products = store.products.map(product=>{
        const {id:productId,quantity,discountPrice:productPrice, discountSum:productDiscount}=product;
        return ({productId,userId:insertId,quantity,productPrice, productDiscount})
      })
      addOrder({products,message})
     })
      
  }

  return (
    <section className="cart">
      <div className="cart__title-block">
        <h1 className="cart__title">Cart</h1>
      </div>
      <div className="cart__main-block">
        <div className="cart__container">
          <div className="cart__order">
            <ul className="cart__order-list">
              {store
                ? store.products.map((product) =>(
                    <li className="cart__order-item" key={product.id}>
                        <ProductCardItem
                          {...product}
                          updateOrder={updateOrderQuantity}
                          deleteOrderProduct={deleteOrderProduct}
                        />
                      </li>
                ))
                : null}
            </ul>
            <div className="cart__total-block">
              <p className="cart__total-cost">
                Total Cost <span className="sum">{total?.totalSum}$</span>
              </p>
              <p className="cart__total-diacount">
                Discount <span className="sum">{total?.totalDiscount}$</span>
              </p>
            </div>
            <div className="cart__customer-form" >
              {
                order 
                ?<CustomerForm 
                checkValidation={checkFormIsValid}
                getUserInfo={getUserInfo} /> 
                : null
              }
              
            </div>
            <Button 
              className={"dark-btn cart__btn" + (isFormValid ? " yellow-btn": "")}
              text={order ? "Confifm":"To order"} 
              icon
              action = {toOrder} />
          </div>
        </div>
      </div>
    </section>
  );
}
