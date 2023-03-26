import { About } from "../../about/About";
import { Presentation } from "../../presentation/Presentation";
import { Products } from "../../products/Products";

import { Sale } from "../../sale/Sale";
import "./HomePage.scss";

export function HomePage() {
  return (
    <>
      <Presentation />
      <Sale />
      <About />
      <Products/>
    </>
  );
}
