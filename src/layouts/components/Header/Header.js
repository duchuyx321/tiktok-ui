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

import { useEvent } from '~/hooks/useEventContext';

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
        to: '/settings',
    },
    ...MenuItem,
    {
        iconLeft: <FontAwesomeIcon icon={faArrowRightToBracket} />,
        title: 'Đăng Xuất',
        separate: true,
    },
];
const updateMENUITEM = (nickname) => {
    return MENU_ITEM.map((item) => {
        if (item.title === 'Xem Hồ sơ' || item.title === 'Yêu Thích') {
            return { ...item, to: `/@${nickname}` };
        }
        return item;
    });
};
const numMessage = '99+';
function Header() {
    const [user, setUser] = useState({});
    const { setEvent } = useEvent();

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
        if (item.title === 'Đăng Xuất') {
            console.log(item);
            localStorage.removeItem('token');
            window.location.reload();
        }
    };

    // handle Login
    const handleOnLogin = () => {
        setEvent(true);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <Link to={config.routes.home}>
                    <Image src={images.logo.default} alt="tiktok" />
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
                        <Button primary onClick={handleOnLogin}>
                            Đăng nhập
                        </Button>
                    )}
                    <Menu
                        items={
                            currentUse
                                ? updateMENUITEM(user.nickname)
                                : MenuItem
                        }
                        onChange={handleMenuOnchange}
                    >
                        {currentUse ? (
                            <Image
                                className={cx('currentUse-avatar')}
                                src={user.avatar}
                                alt={user.nickname}
                                fallback={user.avatar}
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
