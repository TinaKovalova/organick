import uniqid from 'uniqid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export function RatingPanel(props){
   const drowStars = (rating, countStars)=>{
        const stars = [];
        while (stars.length <=countStars) {
          let uniqKey=uniqid();
          stars.push(
            <FontAwesomeIcon
              key={uniqKey}
              icon={faStar}
              style={{ color: stars.length <= rating ? "#FFA858" : "#525c60" }}
            />
          );
        }
        return stars;
    }
    return(
        <>
            {
                drowStars(props.stars,5)
            }
        </>
    )

}