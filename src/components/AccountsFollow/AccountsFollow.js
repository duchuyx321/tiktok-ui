import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import style from '~/components/AccountsFollow/AccountsFollow.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(style);

function AccountsFollow({ label, data = [] }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((item) => (
                <AccountItem key={item.id} data={item} />
            ))}
            <button className={cx('Acc-btn')}>Xem Thêm</button>
        </div>
    );
}

AccountsFollow.propType = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default AccountsFollow;
