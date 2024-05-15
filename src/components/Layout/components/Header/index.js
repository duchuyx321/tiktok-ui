import {useState,useEffect} from "react";
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // import thư viện icon vừa mới i về 
import { faFileCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import {  faCircleXmark } from '@fortawesome/free-regular-svg-icons';

import images from '~/assets/images';
import style from '~/components/Layout/components/Header/Header.module.scss';
import { Wrapper as PopperWrapper } from "~/components/popper";
import AccountsItem from "~/components/AccountsItem";


const cx = classNames.bind(style);

console.log(images) // lấy default trong nó thì mới có ảnh

function Home () {
    const [visible,setVisible] = useState([]);

    useEffect(() =>{
        setTimeout( ()=>{
            setVisible([1,2,3,4]);
        },0)
    })

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
                                                        Accounts
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
                                <FontAwesomeIcon icon={faCircleXmark}  className={cx("clear-icon")}/>
                                </button>
                                {/* load  clear*/}
                                <FontAwesomeIcon icon={faSpinner} className={cx("load")}></FontAwesomeIcon>
                                <button className={cx("search-btn")}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                                </button>
                            </div>
                    </Tippy>

                    <div className={cx("action")}></div>
                </div>
        </div>
    )
}

export default Home;