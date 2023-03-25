import "./Footer.scss";
import { Logo } from "../logo/Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__contacts contacts">
          <h5 className="contacts__title">Contact Us</h5>
          <ul className="contacts__list">
            <li className="contacts__item">
              <p className="contacts__item-title">Email</p>
              <a href="mailto:needhelp@Organia.com">needhelp@Organia.com</a>
            </li>
            <li className="contacts__item">
              <p className="contacts__item-title">Phone</p>
              <a href="tel:666 888 888">666 888 888</a>
            </li>
            <li className="contacts__item">
              <p className="contacts__item-title">Address</p>
              <p>88 road, borklyn street, USA</p>
            </li>
          </ul>
        </div>
        <div className="footer__informer">
          <div className="footer__widgets widgets">
            <Logo />
            <p class="widgets__description">
              Simply dummy text of the printing and typesetting industry.
              LoremIpsum simply dummy text of the printing
            </p>
          </div>
          <ul className="widgets__social-list social">
            <li className="social__item">
              <a
                href="https://www.instagram.com/"
                className="social__link instagram-link"
              ></a>
            </li>
            <li className="social__item">
              <a
                href="https://www.facebook.com/"
                className="social__link facebook-link"
              ></a>
            </li>
            <li className="social__item">
              <a
                href="https://twitter.com/"
                className="social__link twitter-link"
              ></a>
            </li>
            <li className="social__item">
              <a
                href="https://www.pinterest.ca/"
                className="social__link pintrest-link"
              ></a>
            </li>
          </ul>
        </div>
        <div className="footer__utility utility">
          <h5 className="utility__title">Utility Pages</h5>
          <ul className="utility__list">
            <li className="utility__item">
              <a href="#">Style Guide</a>
            </li>
            <li className="utility_item">
              <a href="#">404 Not Found</a>
            </li>
            <li className="utility__item">
              <a href="#">Password Protected</a>
            </li>
            <li className="utility__item">
              <a href="#">Licences</a>
            </li>
            <li className="utility__item">
              <a href="#">Changelog</a>
            </li>
          </ul>
        </div>
      </div>
      <p class="footer__copyright">
        Copyright ©<span className="bold-text">Organick</span>| Designed by{" "}
        <span className="bold-text">VictorFlow</span>
        Templates - Powered by <span className="bold-text">Webflow</span>
      </p>
    </footer>
  );
}
