import { ProductCard } from "../productCard/ProductCard";
import { ProductDetails } from "../productDetails/ProductDetails";
import { Button } from "../button/Button";
import { useEffect, useState, useRef } from "react";
import { getAllProducts } from "../../fetches/fetches";
import "./Products.scss";

export function Products() {
  const [products, setProducts] = useState([]);
  const [allProduct, setAllProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const ditail = useRef(null);

  useEffect(() => {
    getAllProducts().then((result) => {
      const compareProducts = (productA, productB) => {
        if (productA.discount > productB.discount) {
          return -1;
        } else if (productA.discount < productB.discount) {
          return 1;
        }
        return 0;
      };
      setProducts(result.data.sort(compareProducts));
    });
  }, []);

  const getDiscountSum = (price, discount)=>{
    if(!discount) return 0;
    return Number((discount/100).toFixed(2)) * price;
  };

  const getDiscountPrice =(price, discountSum)=>{
    if(!discountSum) return price;
    return (price - discountSum);
  }
  let selected = allProduct ? products : products.slice(0, 8);
  
  const loadMore = (e) => {
    if (e.target.closest(".btn")) {
      setAllProduct(!allProduct);
    }
  };

  const showDetails = (e) => {
    if(e.target.classList.contains("products__detail") || e.target.classList.contains('main-content__close-btn') ||e.target.classList.contains("product")){
      ditail.current.classList.toggle("hidden");
    }
  };
  const setSelected =(id)=>{
    const selected =products.find(product=>product.id===id);
    const discountSum= getDiscountSum(selected.price, selected.discount)
    setSelectedProduct({...selected,
       discountSum,
       discountPrice:getDiscountPrice(selected.price, discountSum)});
  };


  return (
    <section className="products" id="shop">
      <div className="products__container" onClick={(e) => loadMore(e)}>
        <p className="products__subtitle">Categories </p>
        <h2 className="products__title">Our Products</h2>
        <div className="products__content" onClick={showDetails}>
          {selected.map((product) => {
            const {
              id,
              productName,
              price,
              star,
              discount,
              categoryName,
              imagePath,
            } = product;
            const discountSum = getDiscountSum(price, discount);
            const discountPrice =getDiscountPrice(price, discountSum);
            return (
              <ProductCard
                key={id}
                id={id}
                name={productName}
                price={price}
                discountSum={discountSum}
                discountPrice = {discountPrice}
                rating={star}
                imagePath={imagePath}
                categoryName={categoryName}
                selectProduct ={setSelected}
              />
            );
          })}
        </div>
        <Button
          className="dark-btn"
          text={allProduct ? "Hide All" : "Load More"}
          icon
        />
      </div>
      <div className="products__detail hidden" ref={ditail} onClick={showDetails}>
      {
          selectedProduct?
          <ProductDetails {...selectedProduct}/>:null
      }
      </div>
    </section>
  );
}
