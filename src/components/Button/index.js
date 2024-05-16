import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({to, href, primary, children, onClick}) {

    let Components =  "button";

    let props = {
        onClick,
    }
    
    if(to) {
        props.to = to;
        Components = Link;
    }else if(href) {
        props.href = href;
        Components = "a";
    }

    const classes = cx("wrapper");
    return ( 
        <Components className ={classes} {...props}>
            <span>{children}</span>
        </Components>
     );
}

export default Button;