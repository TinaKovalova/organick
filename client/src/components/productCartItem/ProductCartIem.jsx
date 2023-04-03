import { useState, useEffect } from "react";

export function ProductCardItem(props) {
    const [quantity, setQuantity] = useState(props.quantity);
    useEffect(()=>{    
        props.updateOrder(id,quantity)
    },[quantity])

    const deleteProduct = () =>props.deleteOrderProduct(props.id);
    const changeQuantity = (e)=> setQuantity(+e.target.value);
    const{  id, imagePath, productName,discountSum,price,discountPrice} =props
    
  return (
    <>
      <img
        src={require("../../assets" +
          (imagePath || "/product/fruit-vegetables.png"))}
        className="cart__order-image"
        alt=""
      />
      <p className="cart__product-name">
        {productName}
        <span className={"cart__price" + (discountSum ? " discount" : "")}>
            ${price}
        </span>
        <span className="cart__discount-price">
            {discountSum ? "$" + discountPrice : null}
        </span>
      </p>
      <form className="cart__order-form" onClick={(e) => e.preventDefault()}>
        <label className="cart__lable" htmlFor="cart-quantity">
          Quantity :
        </label>
        <input
          className="cart__field"
          type="number"
          name="quantity"
          min="1"
          id="cart-quantity"
          value={quantity}
          onChange={changeQuantity}
        />
        <button className="cart__close-btn" value={id} onClick={deleteProduct}>
          X
        </button>
      </form>
    </>
  );
}
