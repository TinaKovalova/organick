import "./News.scss";
import { Button } from "../button/Button";
import { NewsCard } from "../newsCard/NewsCard";
export function News() {
  return (
    <section className="news" id="news">
      <div className="news__container">
        <div className="news__headers">
          <div className="news__titles-block">
            <p className="news__subtitle">News</p>
            <h2 className="news__title">
              Discover weekly content about organic food, & more
            </h2>
          </div>
          <Button text="More News" icon className="white-btn btn-border" />
        </div>
        <div className="news__content">
          <NewsCard
            title="The Benefits of Vitamin D & How to Get It"
            author="Rachi Card"
            text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            imageName="salad.png"
          />
          <NewsCard
            title="Our Favourite Summertime Tommeto"
            author="Rachi Card"
            text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            imageName="tomato.png"
          />
        </div>
      </div>
    </section>
  );
}
