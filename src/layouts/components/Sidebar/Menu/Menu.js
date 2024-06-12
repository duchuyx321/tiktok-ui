import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from '~/layouts/components/Sidebar/Sidebar.module.scss';

const cx = classNames.bind(style);

function Menu({ children }) {
    return <nav className={cx('wrapperNav')}>{children}</nav>;
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Menu;
