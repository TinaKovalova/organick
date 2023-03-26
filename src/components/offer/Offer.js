import { ProductCard } from "../productCard/ProductCard";
import "./Offer.scss";

export function Offer() {
  return (
    <section className="offer">
      <div className="offer__container">
        <p className="offer__subtitle">Offer</p>
        <h2 className="offer__title">We Offer Organic For You</h2>
        <div className="offer__content">
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
      </div>
    </section>
  );
}
