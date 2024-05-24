
import Tippy from '@tippyjs/react/headless';



import { Wrapper as PopperWrapper } from "~/components/popper";
import MenuItem from "~/components/popper/menu/MenuItem";
import style from "~/components/popper/menu/Menu.module.scss";
import classNames from "classnames/bind";
import Header from './Header';



const cx = classNames.bind(style);



function Menu({children , items = []}) {
        const renderItem = () => {
                return items.map((item,index) => (
                        <MenuItem key={index}  data = {item} />
                ));
        }
    
    return ( 
        
        <Tippy 
                visible = "true"
                interactive = {true}
                placement="bottom-end"
                render={(attrs) => (
                        <div className={cx("menu-list")}  tabIndex="-1" {...attrs} >
                                <PopperWrapper className={cx("menu-popper")}>
                                        <Header title= "Tiếng việt " />
                                        {renderItem()}
                                </PopperWrapper>
                        </div>
                )}
        >
                {children}
        </Tippy>
     );
}

export default Menu;