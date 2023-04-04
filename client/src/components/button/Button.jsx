import "./Button.scss";
import arrow from '../../assets/arrow.png';

export function Button({text, icon, className, action}) {
  return (
    <button className={`btn ${className}`} onClick={action}>
      {text}
      {icon ? <img src={arrow} className="btn__icon" alt="arrow"/> : null}
    </button>
  );
}
