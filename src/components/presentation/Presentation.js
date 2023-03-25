import "./Presentation.scss";
import { Button } from "../button/Button";

export function Presentation() {
  return (
    <section className="presentation bright">
      <div className="presentation__container">
        <div className="presentation__content ">
          <p className="presentation__subtitle">100% Natural Food</p>
          <h1 className="presentation__title">
          Choose the best healthier way of life</h1>
          <Button text="Explore Now" icon="true" />
        </div>
      </div>
    </section>
  );
}
