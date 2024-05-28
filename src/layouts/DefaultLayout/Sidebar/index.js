import style from "./Sidebar.module.scss";
import classNames from "classnames/bind";


const cx = classNames.bind(style);

function Sidebar () {
    return (
        <div className={cx("wrapper")}>
            <div>
                <h1>Sidebar Pages</h1>      
            </div>
        </div>
    )
}

export default Sidebar;