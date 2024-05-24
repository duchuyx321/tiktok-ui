import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from "~/components/popper";
import MenuItem from "~/components/popper/menu/MenuItem";
import style from "~/components/popper/menu/Menu.module.scss";
import classNames from "classnames/bind";
import Header from './Header';



const cx = classNames.bind(style);

const defaultFn = () => {};

function Menu({children , items = [], onChange = defaultFn }) {
        const [history,setHistory] = useState([{data:items}]); // tạo mảng chửa một oject item để có thể xử lí thêm xóa
        const current = history[history.length - 1];
        const renderItems = () => {
                return current.data.map((item,index) => {
                        const isParent = !!item.children // đẩy sang kiểu boolean
                                return <MenuItem 
                                        key = {index}
                                        data={item}
                                        onClick = {() => {
                                                if(isParent){
                                                        setHistory((prev) => ( [...prev, item.children]))
                                                }else {
                                                        onChange(item);
                                                }
                
                                        }}
                                  />
                })
        }
    
    return ( 
        
        <Tippy 
                interactive = {true}
                delay={[0,700]}
                placement="bottom-end"
                render={(attrs) => (
                        <div className={cx("menu-list")}  tabIndex="-1" {...attrs} >
                                <PopperWrapper className={cx("menu-popper")}>
                                        {history.length > 1 && <Header title= "Language " onback={() => {
                                                        setHistory(prev => prev.slice(0,prev.length -1)); // lấy từ phần tử đầu đến gần cuối 
                                                }
                                        } />}
                                        {renderItems()}
                                </PopperWrapper>
                        </div>
                )}
                onHide={() => setHistory(prev => prev.slice(0,1))} // về lại vị trí đầu tiên 
        >
                {children}
        </Tippy>
     );
}

export default Menu;