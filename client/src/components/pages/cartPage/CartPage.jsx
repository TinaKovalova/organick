import './CartPage.scss';
import { useState, useContext, useEffect } from "react";
import { LocalStorageContext } from "../../app/App";
import { Button } from '../../button/Button';

export function CartPage(){
    const {store, updateStore } = useContext(LocalStorageContext);
    const [total, setTotal] = useState(null);

 const deleteProduct = (e) =>{
    e.preventDefault()
 }
 const changeQuantity = ()=>{

 }
 useEffect(()=>{
    const totalOrderSum =store?.products.reduce((total, item, index)=>{
        const {quantity,discountPrice,discountSum} = item;
        return {...total,
            totalSum:total.totalSum + quantity * discountPrice,
            totalDiscount: total.totalDiscount + quantity*discountSum
         }
    },{totalSum:0,totalDiscount:0})
    setTotal(totalOrderSum)
 },[store?.products])
 console.log(total)


    return(
       <section className='cart'>
            <div className='cart__title-block'>
                <h1 className='cart__title'>Cart</h1>
            </div>
            <div className='cart__main-block'>
            <div className='cart__container'>
            <div className='cart__order'>
                    <ul className='cart__order-list'>
                      { 
                        store ? store.products.map((product)=>{
                        const {id, name, quantity, price,discountSum,discountPrice, imagePath} = product;
                        return (<li className='cart__order-item' key={id}>
                            <img src={require("../../../assets"+ (imagePath || "/product/fruit-vegetables.png"))} className='cart__order-image' alt=""/>
                            <p className='cart__product-name'>
                            {name}
                            <span className={"cart__price"+ (discountSum ? " discount":"")}> ${price}</span>
                            <span className="cart__discount-price"> {discountSum? '$'+ discountPrice : null}</span>
                            </p>
                            <form className="cart__order-form" onClick={deleteProduct}>
                               <label
                                 className="cart__lable"
                                 htmlFor="cart-quantity"
                                >
                                Quantity :
                               </label>
                               <input
                                    className="cart__field"
                                    type="number"
                                    name="quantity"
                                    id="cart-quantity"
                                    value={quantity}
                                    onChange={changeQuantity}
                                    />
                                <button className="cart__close-btn">X</button>
                           </form>
                        </li>
                       )}) :null
                    }
                    </ul>
                    <div className='cart__total-block'>
                        <p className='cart__total-cost'>Total Cost <span className='sum'>{total?.totalSum}$</span></p>
                        <p className='cart__total-diacount'>Discount <span className='sum'>{total?.totalDiscount}$</span></p>
                    </div>
                    <form className='cart__customer-form customer-form hidden'>
                     <div className='customer-form__row'>
                        <div className='customer-form__row-item'>
                            <label htmlFor='name' className='cart__field-label'>Full Name*</label>
                            <input type='text' name ="name" className='customer-form__field' placeholder='Your full name' required/>
                        </div>
                        <div className='customer-form__row-item'>
                            <label  htmlFor='email' className='cart__field-label'>Your Email* </label>
                            <input type='email' name='email' className='customer-form__field'  placeholder='example@yourmail.com' required/>
                        </div>   
                        </div>
                        <div className='customer-form__row'>
                        <div className='customer-form__row-item'>
                             <label  htmlFor='address' className='cart__field-label'>Address*</label>
                             <input type='text' name='address' className='customer-form__field'  placeholder='your company  address' required/>
                        </div>
                        <div className='customer-form__row-item'>
                            <label  htmlFor='phone' className='cart__field-label'>Phone number* </label>
                            <input type='text' name='phone' className='customer-form__field'  placeholder='Enter your phone' required/>
                        </div>
                      </div>
                        <label className='cart__field-label'>Message
                        <textarea placeholder='some extra information' className='customer-form__field message-field' ></textarea>
                        </label>
                    </form>
                   <Button className="dark-btn cart__btn" text="To order" icon/>
                </div>
            </div>
                
            </div>
        </section>
    )
}