import { ProductCard } from "../productCard/ProductCard";
import {ProductDetails}  from "../productDetails/ProductDetails";
import { Button } from "../button/Button";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../fetches/fetches";
import "./Products.scss";

export function Products() {
  const [products, setProducts] = useState([]);
  const [allProduct, setAllProduct] = useState(false);

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

  let selected = allProduct ? products : products.slice(0, 8);
  const loadMore = (e) => {
    if(e.target.closest('.btn')){
      setAllProduct(!allProduct);
    }
  };
  
  const showDetails = ()=>{

  }
  console.log(products)

  return (
    <section className="products">
      <div className="products__container" onClick={(e)=>loadMore(e)} >
        <p className="products__subtitle">Categories </p>
        <h2 className="products__title" >Our Products</h2>
        <div className="products__content" >
          {
            selected.map((product) => {
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
                onClick={showDetails}
              />
            );
          })
       
         
          }
         
        </div>
        <Button className="dark-btn" text={allProduct? "Hide All": "Load More"} icon />

        
      </div>
      <div className="products__detail">
      {
            products[0]? <ProductDetails
               id={products[5].id}
                name={products[5].productName}
                price={products[5].price}
                discount={products[5].discount}
                rating={products[5].star}
                imagePath={products[5].imagePath}
                categoryName={products[5].categoryName}
                description = {products[5].description}
                fullDescription={products[5].fullDescription}
                exstraInformation={products[5].exstraInformation}

            />: null
          }

      </div>
      
      
    </section>
  );
}
