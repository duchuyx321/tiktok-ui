import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom'; // giống với thẻ Link như nó cho phép chúng ta xử lí active
import PropTypes from 'prop-types';

import style from '~/layouts/components/Sidebar/Menu/Menu.module.scss';

const cx = classNames.bind(style);

function MenuItem({ title, to, icon }) {
    return (
        //  thẻ NavLink sẽ tự thêm vào một class active theo đường dẫn
        // tân dụng khả năng có thể sữ dụng chuổi hoặc return của fuction để làm
        <NavLink
            className={(nav) => cx('menu-item', { active: nav.isActive })}
            to={to}
        >
            {icon}
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propType = {
    title: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.node,
};
export default MenuItem;
