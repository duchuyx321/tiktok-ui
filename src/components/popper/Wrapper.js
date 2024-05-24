import classNames from "classnames/bind";
import Styles from "./popper.module.scss";

const cx = classNames.bind(Styles);

function wrapper({children , classNames}) {
    return (  
        <div className={cx("wrapper",classNames)}>
            {children}
        </div>
    );
}

export default wrapper;