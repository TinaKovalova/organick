import "./ProductCard.scss";

import {drowStars} from '../../functions';
export function ProductCard(props) {
  const {
    id,
    name,
    price,
    discountSum,
    discountPrice,
    rating,
    imagePath,
    categoryName,
    selectProduct
  } = props
  const stars = drowStars(5,rating);
  return (
    <div className="product"
    onClick={()=>selectProduct(id)}
    style={{backgroundImage: `url(${require("../../assets"+ (imagePath || "/product/fruit-vegetables.png"))})`}}
    >
      <div className="product__category">{categoryName}</div>
      <div className="product__description">
        <p className="product__name">{name}</p>
        <div className="product__values">
          <span className={"product__price"+ (discountSum ? " discount":"")}>${price}</span>
          <span className="product__discount-price">{discountSum? '$'+ discountPrice : null}</span>
          <p className="rating">
            {stars}
          </p>
        </div>
      </div>
    </div>
  );
}
