import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
    to,
     href,
     primary = false,
     outline  = false,
     disabled = false,
     text = false,
     small = false,
     large = false,
     leftIcon = false,
     rightIcon = false,
     children,
     className,
     onClick,
     rounded,
      ...passPops
    }) {

    let Components =  "button";

    let props = {
        onClick,
        ...passPops
    }
    


    if(to) {
        props.to = to;
        Components = Link;
    }else if(href) {
        props.href = href;
        Components = "a";
    }

    const classes = cx("wrapper", {
        [className] : className,
        primary,
        outline,
        text,
        small,
        large,
        disabled,
        rounded,
       
    });
    console.log();
    return ( 
        <Components className ={classes} {...props}>
            {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
            <span className={cx("title")}>{children}</span>
            {rightIcon && <span className="icon">{rightIcon}</span>}
        </Components>
     );
}

export default Button;