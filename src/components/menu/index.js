import style from "./Menu.module.scss";
import classNames from "classnames/bind";
import images from '~/assets/images';

const cx = classNames.bind(style);

function Menu() {
    return ( 
        <div className={cx("wrapper")}>
            <div className = {cx("creative")}>
                <img src={images.iconLight.default} alt="nội dung sáng tạo " />
                <span> Trung Tâm Nhà Sáng Tạo LIVE </span>
            </div>
            <div className = {cx("language")}>
                
            </div>    
            <div className = {cx("support")}>
                
            </div>         
            <div className = {cx("mode")}>
                
            </div>
            <div className = {cx("download")}>
                
            </div>
        </div>
     );
}

export default Menu;