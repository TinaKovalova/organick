import { useEffect, useRef } from "react";
import "./SaleCard.scss";

export function SaleCard({ src, subtitle, title, className }) {
  const cardRef = useRef(null);

  useEffect(() => {
    cardRef.current.style.backgroundImage = `url(${src})`;
  });


  return (
    <div className={`sale-card ${className}`} ref={cardRef}>
      <div className="sale-card__content">
        <p className="sale-card__subtitle">{subtitle}</p>
        <h3 className="sale-card__title">{title}</h3>
      </div>
    </div>
  );
}
