import { SubscribeForm } from "../subscribeForm/SubscribeForm";
import "./Subscribe.scss";
export function Subscribe() {
  return (
    <section className="subscribe">
      <div className="subscribe__container">
        <h2 className="subscribe__title">Subscribe to our Newsletter</h2>
        <SubscribeForm />
      </div>
    </section>
  );
}
