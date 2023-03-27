import "./SaleCard.scss";

export function SaleCard({ src, subtitle, title, className }) {
 
  return (
    <div className={`sale-card ${className}`} style = {{background:`url(${src})`}}>
      <div className="sale-card__content">
        <p className="sale-card__subtitle">{subtitle}</p>
        <h3 className="sale-card__title">{title}</h3>
      </div>
    </div>
  );
}
