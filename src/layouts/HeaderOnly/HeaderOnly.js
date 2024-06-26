import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './HeaderOnly.module.scss';
import Header from '~/layouts/components/Header';

const cx = classNames.bind(style);
function HeaderOnly({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
