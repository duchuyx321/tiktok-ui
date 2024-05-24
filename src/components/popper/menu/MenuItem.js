import Button from "~/components/Button";

import style from "./Menu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function MenuItem({data }) {
    return ( 
        <Button className={cx("menu-items")} leftIcon = {data.iconLeft} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;