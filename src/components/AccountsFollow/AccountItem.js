import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Image from '~/components/image';

import style from '~/components/AccountsFollow/AccountsFollow.module.scss';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function AccountItem({ data }) {
    console.log(data);

    return (
        <Link className={cx('account-item')} to={`@${data.nickname}`}>
            <Image
                className={cx('avatar')}
                src={data.avatar}
                alt={data.nick_name}
            />

            <div className={cx('info')}>
                <p className={cx('useName')}>
                    <span> {data.nickname} </span>
                    {data.tick && (
                        <FontAwesomeIcon
                            icon={faCircleCheck}
                            className={cx('useName-Check')}
                        ></FontAwesomeIcon>
                    )}
                </p>
                <span className={cx('name')}>
                    {' '}
                    {`${data.first_name} ${data.last_name}`}{' '}
                </span>
            </div>
        </Link>
    );
}

AccountItem.propType = {
    data: PropTypes.array,
};
export default AccountItem;
