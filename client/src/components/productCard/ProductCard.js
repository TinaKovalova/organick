import "./ProductCard.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
export function ProductCard(props) {
  const {
    id,
    name,
    price,
    discount,
    rating,
    imagePath,
    categoryName,
  } = props
  const stars =[];
  while(stars.length<6){
    stars.push( <FontAwesomeIcon icon={faStar} style={{color:stars.length<=rating? "#FFA858" : "#525c60" }} />)
  }
  return (
    <div className="product"
    style={{backgroundImage: `url(${require("../../assets"+ (imagePath || "/product/fruit-vegetables.png"))})`}}
    >
      <div className="product__category">{categoryName}</div>
      <div className="product__description">
        <p className="product__name">{name}</p>
        <div className="product__values">
          <span className="product__price"
          style={ { textDecoration:discount? "line-through": "none" }}
          >${price}</span>
          <span className="product__discount-price">{discount? '$'+ discount : null}</span>
          <p className="rating">
            {stars}
          </p>
        </div>
      </div>
    </div>
  );
}
