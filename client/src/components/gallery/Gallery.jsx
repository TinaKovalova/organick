import { GalleryCard } from '../galleryCard/GalleryCard';
import './Gallery.scss';
export function Gallery(){
    return(
        <section className='gallery'>
            <div className='gallery__container' id='projects'>
                <GalleryCard btnText="Organic Juice" imageName="juice.png"/>
                <GalleryCard btnText="Organic Food" imageName="food.png"/>
                <GalleryCard btnText="Nuts Cookis" imageName="cookis.png"/>
            </div>
        </section>
    )
}