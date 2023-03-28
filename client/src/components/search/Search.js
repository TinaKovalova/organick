import './Search.scss';

export function Search(){
    return(
        <div className = "header__search-panel search-panel">
            <input type="text" className="search-panel__field"/>
            <button className = "search-panel__btn"></button>    
        </div>
    )
}