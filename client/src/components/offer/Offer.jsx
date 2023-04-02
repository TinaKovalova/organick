import { ProductCard } from "../productCard/ProductCard";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../fetches/fetches";
import "./Offer.scss";

export function Offer() {
  const [products, setProducts] = useState([]);
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
      setProducts(result.data.sort(compareProducts).slice(0,4));
    });
  }, []);
  return (
    <section className="offer">
      <div className="offer__container">
        <p className="offer__subtitle">Offer</p>
        <h2 className="offer__title">We Offer Organic For You</h2>
        <div className="offer__content">
        { products ? products.map((product) => {
            const { id, productName, price, star, discount, categoryName, imagePath} = product;
            return (
              <ProductCard
                key={id}
                id={id}
                name={productName}
                price={price}
                discount={discount}
                rating={star}
                imagePath={imagePath}
                categoryName={categoryName}
              />
            );
          }): null}
        </div>
      </div>
    </section>
  );
}
