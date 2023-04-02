import './CartPage.scss';
import { Button } from '../../button/Button';
import testImg from '../../../assets/product/Image.png'

export function CartPage(){

 const deleteProduct = (e) =>{
    e.preventDefault()
 }
 const changeQuantity = ()=>{

 }
    return(
       <section className='cart'>
            <div className='cart__title-block'>
                <h1 className='cart__title'>Cart</h1>
            </div>
            <div className='cart__main-block'>
            <div className='cart__container'>
            <div className='cart__order'>
                    <ul className='cart__order-list'>
                        <li className='cart__order-item'>
                            <img src={testImg} className='cart__order-image' alt=""/>
                            <p className='cart__product-name'>
                            Health Pistachios 
                           <span className="cart__price"> $20.00</span>
                           <span className="cart__discount-price"> $13.00</span>
                            </p>
                            {/* <div className="cart__values">
                              <span className="cart__price"
                                   style={ { textDecoration:discount? "line-through": "none" }}
                              >${price}</span>
                              <span className="cart__discount-price">{discount? '$'+ discount : null}</span>
                            </div> */}
                            <form className="cart__form" onClick={deleteProduct}>
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
                                    value="1"
                                    onChange={changeQuantity}
                                    />
                                <button className="cart__close-btn">X</button>
                           </form>
                        </li>
                    </ul>
                    <div className='cart__total-block'>
                        <p className='cart__total-cost'>Total Cost <span className='sum'>26$</span></p>
                        <p className='cart__total-diacount'>Discount <span className='sum'>26$</span></p>
                    </div>
                    {/* <form className='cart__form form'>
                        <div>
                            <label>Full Name*
                            <input type='text' placeholder='Your full name' required/>
                            </label>
                       
                            <label>Your Email*
                            <input type='email' placeholder='example@yourmail.com' required/>
                            </label>
                            
                        </div>
                        <div>
                             <label>Address*
                             <input type='text' placeholder='your company  address' required/>
                             </label>
                       
                            <label>Phone number*
                            <input type='text' placeholder='Enter your phone' required/>
                            </label>
                           
                        </div>
                        <label>Message
                        <textarea placeholder='some extra information'></textarea>
                        </label>
                        
                    </form> */}
                   <Button className="dark-btn cart__btn" text="To order" icon/>
                </div>
            </div>
                
            </div>
        </section>
    )
}