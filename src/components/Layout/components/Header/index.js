import {useState,useEffect} from "react";
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // import thư viện icon vừa mới i về 
import { faPlus, faMagnifyingGlass, faSpinner, faCircleXmark, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import style from '~/components/Layout/components/Header/Header.module.scss';
import Button from "~/components/Button";
import { Wrapper as PopperWrapper } from "~/components/popper";
import AccountsItem from "~/components/AccountsItem";
import Menu from "~/components/menu";


const cx = classNames.bind(style);

console.log(images); // lấy default trong nó thì mới có ảnh

function Home () {
    const [visible,setVisible] = useState([]);

    useEffect(() =>{
        setTimeout( ()=>{
            setVisible([1,2,3,4]);
        },0)
    },[])

    const [menu,setMenu] = useState(true);

    useEffect (() =>{

    }, [menu]);

    return (
        <div className={cx("wrapper")}>
                <div className={cx("inner")}>
                    <img src={images.logo.default}  alt='tiktok' />
                    
                    <Tippy
                         visible={visible.length > 0}
                            render={attrs => (
                                        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                                            <PopperWrapper>
                                                    <h4 className={cx('search-title')}>
                                                        <div>Accounts</div>
                                                        <AccountsItem/>
                                                        <AccountsItem/>
                                                        <AccountsItem/>
                                                        <AccountsItem/>
                                                    </h4>
                                            </PopperWrapper>
                                        </div>
                            )}
                          
                    >
                            <div className={cx("search")}>
                                <input type='text'
                                    placeholder='Tìm Kiếm'
                                    spellCheck = {false}  // không báo lỗi chính tả khi nhập
                                />
                                {/* clear */}
                                <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                                {/* load  clear*/}
                                <FontAwesomeIcon icon={faSpinner} className={cx("load")}></FontAwesomeIcon>
                                <button className={cx("search-btn")}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                                </button>
                            </div>
                    </Tippy>

                    <div className={cx("action")}>
                        <div className = {cx("upload")}>
                            <FontAwesomeIcon icon={faPlus} className={cx("upload-icon")} />
                            <span>Tải Lên</span>
                        </div>
                        <Button to = "/following" onClick={() => {alert("login")}}> Đăng Nhập </Button>

                        <Tippy 
                            visible = {menu}
                            render={(pops) => (
                                <div className = {cx("menu")}>
                                    <PopperWrapper>
                                        <div className = {cx("menu-tools")}>
                                                <Menu/>
                                        </div>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className ={cx("extend")}>
                                <FontAwesomeIcon icon= {faEllipsisVertical} />
                            </div>
                        </Tippy>
                    </div>
                </div>
        </div>
    )
}

export default Home;