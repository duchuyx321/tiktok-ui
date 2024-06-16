import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import defaultLayout from '~/layouts/DefaultLayout/DefaultLayout.module.scss';
import Sidebar from '~/layouts/components/Sidebar';
import { useEvent } from '~/hooks/useEventContext';
import LoginRegister from '~/components/Login/LoginRegister';
const cx = classNames.bind(defaultLayout);

function DefaultLayout({ children }) {
    const { eventHandle } = useEvent();
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    <div className={cx('inner')}>{children}</div>
                </div>
            </div>
            {eventHandle && <LoginRegister />}
        </div>
    );
}

defaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
