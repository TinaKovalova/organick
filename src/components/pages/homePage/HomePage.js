import { About } from "../../about/About";
import { EcoFriendly } from "../../ecoFriendly/EcoFriendly";
import { Gallery } from "../../gallery/Gallery";
import { Offer } from "../../offer/Offer";
import { Presentation } from "../../presentation/Presentation";
import { Products } from "../../products/Products";
import { Sale } from "../../sale/Sale";
import "./HomePage.scss";
import { News } from "../../news/News";
import { Subscribe } from "../../subscribe/Subscribe";
import { Testimonial } from "../../testimonial/Testimonial";

export function HomePage() {
  return (
    <>
      <Presentation />
      <Sale />
      <About />
      <Products />
      <Testimonial/>
      <Offer />
      <EcoFriendly />
      <Gallery />
      <News/>
      <Subscribe/>
    </>
  );
}
