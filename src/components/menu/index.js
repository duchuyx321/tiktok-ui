import { useState } from "react";
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from "~/components/popper";

import style from "./Menu.module.scss";
import classNames from "classnames/bind";



const cx = classNames.bind(style);



function Menu({children , items}) {
    const [dark,setDark] = useState(false);
    return ( 
        
        <Tippy 
                interactive = {true}
                placement="bottom-end"
                render={(attrs) => (
                        <div className={cx("content")}>
                                <PopperWrapper>

                                </PopperWrapper>
                        </div>
                )}
        >
                {children}
        </Tippy>
     );
}

export default Menu;