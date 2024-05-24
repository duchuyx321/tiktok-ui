import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import style from "~/components/popper/menu/Menu.module.scss";
import classNames from "classnames/bind";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';



const cx = classNames.bind(style);



function Header({title, onback}) {
       
    return ( 
            <header className= {cx("header")}>
                <button className= {cx("header-btn")} onClick={onback}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                
                <h4 className= {cx("header-title")}>{title}</h4>
            </header>
     );
}

export default Header;