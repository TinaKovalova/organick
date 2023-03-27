import { Button } from "../button/Button";
import "./SubscribeForm.scss";
export function SubscribeForm() {
  return (
    <form className="subscribeForm">
      <input
        type="email"
        className="subscribeForm__field"
        placeholder="Your Email Address"
        required
      />
      <Button text="Subscribe" className="dark-btn subscribeForm__btn"></Button>
    </form>
  );
}
