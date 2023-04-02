import "./ProductDetails.scss";
import { Button } from "../button/Button";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export function ProductDetails(props) {
  const {
    id,
    name,
    price,
    discount,
    description,
    fullDescription,
    exstraInformation,
    rating,
    imagePath,
    categoryName
  } = props;
  const [quantity, setQuantity] = useState(1);
  const [productInfo, setProductInfo] = useState(fullDescription);

  const stars = [];
  while (stars.length < 6) {
    stars.push(
      <FontAwesomeIcon
        icon={faStar}
        style={{ color: stars.length <= rating ? "#FFA858" : "#525c60" }}
      />
    );
  }
  const addProduct = (e) => {
    e.preventDefault();
    
  };
  const changeQuantity = (e) => setQuantity(e.target.value);
  const changeProductInfo = (e) => {
    const target = e.target;
    if (target.closest(".details__actions-btn")) {
      e.currentTarget
        .querySelector(".active-btn")
        .classList.toggle("active-btn");
      target.classList.add("active-btn");
      target.value === "full"
        ? setProductInfo(fullDescription)
        : setProductInfo(exstraInformation);
    }
  };
  return (
    <div className="details" >
        <div className="details__container">
          <div className="details__content-wrapper">
            <div
              className="details__image"
              style={{
                backgroundImage: `url(${require("../../assets" +
                  (imagePath || "/product/fruit-vegetables.png"))})`,
              }}
            >
              <div className="details__category">{categoryName}</div>
            </div>
            <div className="details__main-content main-content">
              <button className="main-content__close-btn">X</button>
              <h2 className="main-content__title">{name}</h2>
              <p className="main-content__rating">{stars}</p>
              <p className="main-content__values">
                <span
                  className="main-content__price"
                  style={{ textDecoration: discount ? "line-through" : "none" }}
                >
                  ${price}
                </span>
                <span className="main-content__discount">
                  {discount ? "$" + discount : null}
                </span>
              </p>
              <p className="main-content__text">{description}</p>
              <form className="main-content__form" onClick={addProduct}>
                <label
                  className="main-content__lable"
                  htmlFor="details-quantity"
                >
                  Quantity :
                </label>
                <input
                  className="main-content__field"
                  type="number"
                  name="quantity"
                  id="details-quantity"
                  value={quantity}
                  onChange={changeQuantity}
                />
                <Button className="dark-btn" text="Add To Car" icon />
              </form>
            </div>
          </div>
          <div className="details__extra">
            <div className="details__actions" onClick={changeProductInfo}>
              <button className="details__actions-btn active-btn" value="full">
                Product Description
              </button>
              <button className="details__actions-btn" value="exstra">
                Additional Info
              </button>
            </div>
            <p className="details__description">{productInfo}</p>
          </div>
        </div>
      </div>
  );
}
