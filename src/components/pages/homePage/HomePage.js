import { About } from "../../about/About";
import { Presentation } from "../../presentation/Presentation";
import { ProductCard } from "../../productCard/ProductCard";
import { Sale } from "../../sale/Sale";
import "./HomePage.scss";

export function HomePage() {
  return (
    <>
      <Presentation />
      <Sale />
      <About />
      {/* <ProductCard
        name="Calabrese Broccoli"
        price="20.00"
        discout="5"
        imageName="Image.png"
        category="Vegetable"
      /> */}
    </>
  );
}
