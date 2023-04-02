import "./Button.scss";
import arrow from '../../assets/arrow.png';

export function Button({text, icon, className}) {
  return (
    <button className={`btn ${className}`}>
      {text}
      {icon ? <img src={arrow} className="btn__icon" alt="arrow"/> : null}
    </button>
  );
}
