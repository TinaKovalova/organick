import "./NewsCard.scss";
import { Button } from "../button/Button";
import userIcon from "../../assets/newsCard/user-icon.svg";

export function NewsCard(props) {
  const [, month, date] = new Date().toDateString().split(" ");
  const { title, author, text, imageName }=props;

  return (
    <div
      className="news-card"
      style={{backgroundImage: `url(${require(`../../assets/newsCard/${imageName}`)})`}}
    >
      <div className="news-card__date news-date">
        <span className="news-date__day">{date}</span>
        <span className="news-date__month">{month}</span>
      </div>
      <div className="news-card__content">
        <div className="news-card__author">
          <img src={userIcon} className="news-card__author-icon" alt="author" />
          <span className="news-card__author-name">By {author}</span>
        </div>
        <h6 className="news-card__title">{title}</h6>
        <p className="news-card__text">{text}</p>
        <Button text="Read More" icon className="bright-btn" />
      </div>
    </div>
  );
}
