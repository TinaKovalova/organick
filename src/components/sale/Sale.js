import { SaleCard } from "../saleCard/SaleCard";
import "./Sale.scss";
import background1 from "../../assets/sale/bg1.png";
import background2 from "../../assets/sale/bg2.png";

export function Sale() {
  return (
    <section className="sale">
      <div className="sale__container">
        <SaleCard
          className="bright"
          src={background1}
          subtitle="Natural!!"
          title="Get Garden Fresh Fruits"
        />
        <SaleCard
          src={background2}
          subtitle="Offer!!"
          title={`Get 10% off on Vegetables`}
        />
      </div>
    </section>
  );
}
