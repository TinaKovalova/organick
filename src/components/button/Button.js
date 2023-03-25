import "./Button.scss";
import arrow from '../../assets/arrow.png';

export function Button(props) {
  const { text, icon } = props;
  return (
    <button className="btn">
      {text}
      {icon ? <img src={arrow} className="btn__icon" alt="arrow"/> : null}
    </button>
  );
}
