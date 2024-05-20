
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // import thư viện icon vừa mới i về 
import {  faMagnifyingGlass, faSpinner, faCircleXmark, faPlus, faLightbulb, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import style from '~/components/Layout/components/Header/Header.module.scss';
import Button from "~/components/Button";
import { Wrapper as PopperWrapper } from "~/components/popper";
import AccountsItem from "~/components/AccountsItem";
import Menu from '~/components/menu';




const cx = classNames.bind(style);

const MenuItem =  [
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: "Trung Tâm Nhà Sáng Tạo LIVE",
    },
    {
        icon: "",
        title: "",
    }, 
    {
        icon: " ",
        title: "",
    },
    {
        icon: " ",
        title: "",
    }
]

console.log(images); // lấy default trong nó thì mới có ảnh

function Home () {





    return (
        <div className={cx("wrapper")}>
                <div className={cx("inner")}>
                    <img src={images.logo.default}  alt='tiktok' />
                    
                    <Tippy
                        interactive = {true}
                        appendTo={document.body}
                        render={attrs => (
                                <div className={cx("search-result")}  tabIndex="-1" {...attrs}  >
                                    <PopperWrapper >
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
                        <Button outline to = "/upload" leftIcon = {<FontAwesomeIcon icon={faPlus} />}>Upload</Button>
                        <Button primary  >Đăng nhập</Button>
                        <Menu items={MenuItem}>
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                    </div>
                </div>
        </div>
    )
}

export default Home;