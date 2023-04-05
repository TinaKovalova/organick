import { useNavigate } from "react-router-dom";
import { Button } from "../../button/Button";
import "./NotFoundPage.scss";
export function NotFoundPage() {
    const navigate = useNavigate();
    const redirectTo =(e)=>{
        if(e.target.classList.contains("not-found__btn")){
            console.log('?')
           navigate("/",{replace:true});
        }
    }
  return (
    <section className="not-found">
      <div className="not-found__container">
        <div className="not-found__content">
          <div className="not-found__image"></div>
          <h1 className="not-found__title">page not found</h1>
          <p className="not-found__text">
            the page you are looking for doesn't exist or has been moved
          </p>
          <div className="not-found__actions" onClick={redirectTo}>
          <Button
            text="Go to Homepage"
            icon
            className="dark-btn not-found__btn"
          />
        </div>
        </div>
        
      </div>
    </section>
  );
}
