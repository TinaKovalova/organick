import { Button } from "../button/Button";
import "./About.scss";
export function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__content">
          <p className="about__subtitle">About Us</p>
          <h2 className="about__title">
            We Believe in Working Accredited Farmers
          </h2>
          <p className="about__text">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <ul className="about__list">
            <li className="about__item vegan-food">
              <div className="about__item-content">
                <p className="about__item-title">Organic Foods Only</p>
                <p className="about__item-text">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </li>
            <li className="about__item email-box">
              <div className="about__item-content">
                <p className="about__item-title">Quality Standards</p>
                <p className="about__item-text">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </li>
          </ul>
          <Button className="dark" text="Shop Now" icon="true" />
        </div>
      </div>
    </section>
  );
}
