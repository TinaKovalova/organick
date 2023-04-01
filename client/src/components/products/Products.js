import "./Products.scss";
import { ProductCard } from "../productCard/ProductCard";
import { Button } from "../button/Button";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../fetches/fetches";

export function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((result) => setProducts(result.data));
  }, []);
  
  return (
    <section className="products">
      <div className="products__container">
        <p className="products__subtitle">Categories </p>
        <h2 className="products__title">Our Products</h2>
        <div className="products__content">
          {
            products.length>0? products.map((product) => {
              const { id, productName, price , star, discount,categoryName, imagePath } = product;
            return (
              <ProductCard
                key={id}
                id={id}
                name={productName}
                price ={price}
                discount ={discount}
                rating ={star}
                imagePath={imagePath}
                categoryName={categoryName}
              />
            );
          }) : null
          }
        </div>
        <Button className="dark-btn" text="Load More" icon />
      </div>
    </section>
  );
}
