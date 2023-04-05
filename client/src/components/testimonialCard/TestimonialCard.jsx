import "./TestimonialCard.scss";
import avatar from "../../assets/testimonial/avatar.png";
import { RatingPanel } from "../ratingPanel/RatingPanel";
export function TestimonialCard({ name, text, position, photo,rating }) {
  return (
    <div className="testimonial-card">
      <img src={avatar} className="testimonial-card__avatar" alt="avatar" />
      <div className="testimonial-card__rating">
      <RatingPanel stars={rating}/>
      </div>
      <p className="testimonial-card__text">{text}</p>
      <p className="testimonial-card__name">{name}</p>
      <p className="testimonial-card__position">{position}</p>
    </div>
  );
}
