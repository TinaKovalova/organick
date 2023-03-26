import { Button } from '../button/Button';
import './GalleryCard.scss';
export function GalleryCard({btnText, imageName}){
    return(
        <div className='gallery-card'
        style={{backgroundImage: `url(${require(`../../assets/gallery/${imageName}`)})`}}>
       <Button text={btnText} className="white-btn"/>
        </div>
    )

}