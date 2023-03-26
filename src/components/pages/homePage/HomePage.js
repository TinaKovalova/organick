import { About } from "../../about/About";
import { Presentation } from "../../presentation/Presentation";
import { Sale } from "../../sale/Sale";
import "./HomePage.scss";

export function HomePage() {
  return (
    <>
      <Presentation />
      <Sale />
      <About/>
    </>
  );
}
