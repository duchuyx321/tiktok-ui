import classNames from 'classnames/bind';
import Styles from './AccountsItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(Styles);

function AccountsItem({ data }) {
    return (
        <Link to={`@${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={data.avatar}
                alt={data.full_name}
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
                <div className={cx('name')}>{data.full_name}</div>
            </div>
        </Link>
    );
}

export default AccountsItem;
