import classNames from 'classnames/bind';

import style from '~/pages/Profile/Profile.module.scss';
import UserInfo from './UserInfo';

const cx = classNames.bind(style);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <UserInfo />
        </div>
    );
}
export default Profile;
