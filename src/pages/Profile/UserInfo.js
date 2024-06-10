import classNames from 'classnames/bind';

import style from '~/pages/Profile/Profile.module.scss';
import Image from '~/components/image';
import { faLock, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(style);

function UserInfo({ data }) {
    return (
        <div className={cx('user-info')}>
            <div className={cx('user-info-header')}>
                <div className={cx('wrapper-avatar')}>
                    <Image
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/74d110fb8f26d311cbe94c9f8781e8d0~c5_100x100.jpeg?lk3s=a5d48078&nonce=53732&refresh_token=3334fb954887b1903dd27236120f4c5f&x-expires=1718161200&x-signature=KX97oswd60Lgl9DGqWz7YM%2FamT8%3D&shp=a5d48078&shcp=81f88b70"
                        alt="avatar"
                        className={cx('avatar')}
                    />
                </div>
                <div className={cx('user-info-Container')}>
                    <h1 className={cx('nickname')}>duchuyx321</h1>
                    <span className={cx('name')}>Đức Huy</span>
                    <button className={cx('user-info-container-btn')}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                        <span className={cx('user-info-container-btn-title')}>
                            Sửa Hồ Sơ
                        </span>
                    </button>
                </div>
            </div>
            <div className={cx('user-info-title')}>
                <div className={cx('countFollow')}>
                    <span className={cx('countFollow-wrapper')}>
                        <h2 className={cx('countNum')}>150</h2>
                        Đang Follow
                    </span>
                    <span className={cx('countFollow-wrapper')}>
                        <h2 className={cx('countNum')}>150</h2>
                        Follow
                    </span>
                    <span className={cx('countFollow-wrapper')}>
                        <h2 className={cx('countNum')}>150</h2>
                        Thích
                    </span>
                </div>
                <div className={cx('story')}>Chưa có tiểu sử</div>
            </div>
            <div className={cx('list')}>
                <div className={cx('listMenu')}>
                    <button className={cx('listMenu-btn')}>Video</button>
                    <button className={cx('listMenu-btn')}>
                        <FontAwesomeIcon icon={faLock} className={cx('icon')} />
                        Yêu Thích
                    </button>
                    <button className={cx('listMenu-btn')}>
                        <FontAwesomeIcon icon={faLock} className={cx('icon')} />
                        Đã Thích
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;
