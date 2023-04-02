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

  let selected = allProduct ? products : products.slice(0, 8);
  const loadMore = (e) => {
    if (e.target.closest(".btn")) {
      setAllProduct(!allProduct);
    }
  };

  const showDetails = (e) => {
    console.dir(e.target)
    if(e.target.classList.contains("products__detail") || e.target.classList.contains('main-content__close-btn') ||e.target.classList.contains("product")){
      ditail.current.classList.toggle("hidden");
    }
  };
  const setSelected =(id)=>{
    console.log(id)
    const selected =products.find(product=>product.id===id);
    setSelectedProduct(selected);
  };


  return (
    <section className="products">
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
          <ProductDetails
            id={selectedProduct.id}
            name={selectedProduct.productName}
            price={selectedProduct.price}
            discount={selectedProduct.discount}
            rating={selectedProduct.star}
            imagePath={selectedProduct.imagePath}
            categoryName={selectedProduct.categoryName}
            description={selectedProduct.description}
            fullDescription={selectedProduct.fullDescription}
            exstraInformation={selectedProduct.exstraInformation}
          />:null
      }
      </div>
    </section>
  );
}
