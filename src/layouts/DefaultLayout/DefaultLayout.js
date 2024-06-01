import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import defaultLayout from '~/layouts/DefaultLayout/DefaultLayout.module.scss';
import Sidebar from '~/layouts/components/Sidebar';
const cx = classNames.bind(defaultLayout);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    <div className={cx('inner')}>{children}</div>
                </div>
            </div>
        </div>
    );
}

defaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
