import { CircleSign } from "../circleSign/CircleSign";
import { TestimonialCard } from "../testimonialCard/TestimonialCard";
import "./Testimonial.scss";
export function Testimonial() {
  return (
    <section className="testimonial">
      <div className="testimonial__container">
        <p className="testimonial__subtitle">Testimonial</p>
        <h1 className="testimonial__title">What Our Customer Saying?</h1>
        <div className="testimonial__content">
          <TestimonialCard
            name="Sara Taylor"
            text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
            position="Consumer"
            rating="5"
          />
        </div>
        <div className="testimonial__stat">
          <CircleSign amount="100%" productName="Organic" />
          <CircleSign amount="285" productName="Active Product" />
          <CircleSign amount="350+" productName="Organic Orchads" />
          <CircleSign amount="25+" productName="Years of Farming" />
        </div>
      </div>
    </section>
  );
}
