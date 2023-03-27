import { About } from "../../about/About";
import { EcoFriendly } from "../../ecoFriendly/EcoFriendly";
import { Gallery } from "../../gallery/Gallery";
import { Offer } from "../../offer/Offer";
import { Presentation } from "../../presentation/Presentation";
import { Products } from "../../products/Products";
import { Sale } from "../../sale/Sale";
import "./HomePage.scss";
import { News } from "../../news/News";

export function HomePage() {
  return (
    <>
      <Presentation />
      <Sale />
      <About />
      <Products />
      <Offer />
      <EcoFriendly />
      <Gallery />
      <News/>
    </>
  );
}
