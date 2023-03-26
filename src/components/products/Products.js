import "./Products.scss";
import { ProductCard } from "../productCard/ProductCard";
import { Button } from "../button/Button";

export function Products() {
  return (
    <section className="products">
      <div className="products__container">
        <p className="products__subtitle">Categories </p>
        <h2 className="products__title">Our Products</h2>
        <div className="products__content">
          <ProductCard
            name="Calabrese Broccoli"
            price="20.00"
            discout="5"
            imageName="Image.png"
            category="Vegetable"
          />
          <ProductCard
            name="Calabrese Broccoli"
            price="20.00"
            discout="5"
            imageName="Image.png"
            category="Vegetable"
          />
          <ProductCard
            name="Calabrese Broccoli"
            price="20.00"
            discout="5"
            imageName="Image.png"
            category="Vegetable"
          />
          <ProductCard
            name="Calabrese Broccoli"
            price="20.00"
            discout="5"
            imageName="Image.png"
            category="Vegetable"
          />
          <ProductCard
            name="Calabrese Broccoli"
            price="20.00"
            discout="5"
            imageName="Image.png"
            category="Vegetable"
          />
          <ProductCard
            name="Calabrese Broccoli"
            price="20.00"
            discout="5"
            imageName="Image.png"
            category="Vegetable"
          />
          <ProductCard
            name="Calabrese Broccoli"
            price="20.00"
            discout="5"
            imageName="Image.png"
            category="Vegetable"
          />
          <ProductCard
            name="Calabrese Broccoli"
            price="20.00"
            discout="5"
            imageName="Image.png"
            category="Vegetable"
          />
        </div>
        <Button className="dark" text="Load More" icon="true" />
      </div>
    </section>
  );
}
