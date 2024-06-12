import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import AccountsFollow from '~/components/AccountsFollow';
import style from '~/layouts/components/Sidebar/Sidebar.module.scss';
import Menu from '~/layouts/components/Sidebar/Menu/Menu';
import MenuItem from '~/layouts/components/Sidebar/Menu/MenuItem';
import config from '~/config';
import * as userService from '~/service/userService';
import { IconFollowing, IconHome, IconLive } from '~/components/icon';
import Button from '~/components/Button';

const cx = classNames.bind(style);

function Sidebar() {
    const current = false;
    const [suggestedUser, setSuggestedUser] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            const fetchAPI = async () => {
                const data = await userService.setSuggested();

                return setSuggestedUser(data);
            };
            fetchAPI();
        }
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="Dành Cho Bạn "
                    to={config.routes.home}
                    icon={<IconHome />}
                />
                <MenuItem
                    title="Đang Follow"
                    to={config.routes.following}
                    icon={<IconFollowing />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<IconLive />}
                />
            </Menu>
            {!current ? (
                <div className={cx('wrapperNotify')}>
                    <p className={cx('notifyLogin')}>
                        Đăng nhập để follow các tác giả, thích video và xem bình
                        luận
                    </p>
                    <Button outline large>
                        Đăng Nhập
                    </Button>
                </div>
            ) : (
                <AccountsFollow
                    label="Các Tài khoản Đang Follow"
                    data={suggestedUser}
                />
            )}
        </aside>
    );
}

export default Sidebar;
