import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // import thư viện icon vừa mới i về
import {
    faPlus,
    faLightbulb,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faUserLarge,
    faBookmark,
    faCoins,
    faVideo,
    faGear,
    faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import config from '~/config';
import style from '~/layouts/components/Header/Header.module.scss';
import Button from '~/components/Button';
import Menu from '~/components/popper/menu';
import { faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { MessageIcon, NotifyIcon } from '~/components/icon';
import SupMessage from '~/components/popper/SupMessage';
import Image from '~/components/image';
import Search from '~/layouts/components/Search';
import { useEffect, useState } from 'react';
import * as userService from '~/service/userService';
import LoginRegister from '~/components/Login/LoginRegister';

const cx = classNames.bind(style);

// khi làm như này thì có thể phân được nhiều cấp
const MenuItem = [
    {
        iconLeft: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'Trung Tâm Nhà Sáng Tạo LIVE',
        to: '/creators',
    },
    {
        iconLeft: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Language',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: ' Tiếng Việt ',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: ' Tiếng Việt ',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: ' Tiếng Việt ',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: ' Tiếng Việt ',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: ' Tiếng Việt ',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: ' Tiếng Việt ',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: ' Tiếng Việt ',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: ' Tiếng Việt ',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: ' Tiếng Việt ',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: ' Tiếng Việt ',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: ' Tiếng Việt ',
                },
            ],
        },
    },
    {
        iconLeft: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản Hồi Và Trợ Giúp ',
        to: '/feedback',
    },
    {
        iconLeft: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím Tắt trên bàn Phím',
    },
];
const MENU_ITEM = [
    {
        iconLeft: <FontAwesomeIcon icon={faUserLarge} />,
        title: 'Xem Hồ sơ',
        to: '',
    },
    {
        iconLeft: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Yêu Thích',
        to: '',
    },
    {
        iconLeft: <FontAwesomeIcon icon={faCoins} />,
        title: 'Nhận Xu',
        to: '/coin',
    },
    {
        iconLeft: <FontAwesomeIcon icon={faVideo} />,
        title: 'LIVE Studio',
        to: '/live',
    },
    {
        iconLeft: <FontAwesomeIcon icon={faGear} />,
        title: 'Cài Đặt',
        to: '/setting',
    },
    ...MenuItem,
    {
        iconLeft: <FontAwesomeIcon icon={faArrowRightToBracket} />,
        title: 'Đăng Xuất',
        separate: true,
    },
];
const numMessage = '99+';
function Header() {
    const [hidden, setHidden] = useState(false);
    const [user, setUser] = useState({});

    const [currentUse, setCurrentUse] = useState(
        !!localStorage.getItem('token'),
    );

    useEffect(() => {
        if (localStorage.getItem('token')) {
            const fetchAPI = async () => {
                const result = await userService.user();
                setUser(result);
            };
            fetchAPI();
            setCurrentUse(true);
        }
    }, [currentUse]);

    // handle logic
    const handleMenuOnchange = (item) => {
        console.log(item);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <Link to={config.routes.home}>
                    <img src={images.logo.default} alt="tiktok" />
                </Link>
                {/* search */}
                <Search />
                {/* Action */}
                <div className={cx('action')}>
                    {currentUse && (
                        <Button
                            outlineText
                            to="/upload"
                            leftIcon={<FontAwesomeIcon icon={faPlus} />}
                        >
                            Upload
                        </Button>
                    )}
                    {currentUse ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content="Tin Nhắn"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                    <SupMessage> {numMessage}</SupMessage>
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 200]}
                                content="Thông Báo "
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <NotifyIcon />
                                    <SupMessage> {numMessage}</SupMessage>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Button primary onClick={() => setHidden(!hidden)}>
                            Đăng nhập
                        </Button>
                    )}
                    <Menu
                        items={currentUse ? MENU_ITEM : MenuItem}
                        onChange={handleMenuOnchange}
                        nickname={user.nickname}
                    >
                        {currentUse ? (
                            <Image
                                className={cx('currentUse-avatar')}
                                src={user.avatar}
                                alt={user.nickname}
                                fallback="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/74d110fb8f26d311cbe94c9f8781e8d0~c5_100x100.jpeg?lk3s=a5d48078&nonce=71935&refresh_token=33f9b5ec1d223de724eb063a603629ee&x-expires=1716732000&x-signature=4QVAJgmPxqLMAaHYTh2MCdnuXTY%3D&shp=a5d48078&shcp=81f88b70"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
            {hidden && <LoginRegister />}
        </div>
    );
}

export default Header;
