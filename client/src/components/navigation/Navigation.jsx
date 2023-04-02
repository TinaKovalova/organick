import './Navigation.scss';
import {Link} from 'react-router-dom';

export function Navigation(){
    return(
        <nav className='header__navigation navigation'>
        <ul className='navigation__list'>
        <li className='navigation__item'><Link to = "">Home</Link></li>
          <li className='navigation__item'><Link to = "">About</Link></li>
          <li className='navigation__item'><Link to = "">Pages</Link></li>
          <li className='navigation__item'><Link to = "">Shop</Link></li>
          <li className='navigation__item'><Link to = "">Projects</Link></li>
          <li className='navigation__item'><Link to = "">News</Link></li>
        </ul>
          
        </nav>
    )
}