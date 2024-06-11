import classNames from 'classnames/bind';
import { useState } from 'react';
import { faLock, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from '~/pages/Profile/Profile.module.scss';
import Image from '~/components/image';

const cx = classNames.bind(style);

function UserInfo({ data }) {
    const [active, setActive] = useState(0);

    return (
        <div className={cx('user-info')}>
            <div className={cx('user-info-header')}>
                <div className={cx('wrapper-avatar')}>
                    <Image
                        src={data.avatar}
                        alt={data.nickname}
                        className={cx('avatar')}
                    />
                </div>
                <div className={cx('user-info-Container')}>
                    <h1 className={cx('nickname')}>{data.nickname}</h1>
                    <span className={cx('name')}>
                        {`${data.first_name} ${data.last_name}`}
                    </span>
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
                        <h2 className={cx('countNum')}>
                            {data.followings_count}
                        </h2>
                        Đang Follow
                    </span>
                    <span className={cx('countFollow-wrapper')}>
                        <h2 className={cx('countNum')}>
                            {data.followers_count}
                        </h2>
                        Follow
                    </span>
                    <span className={cx('countFollow-wrapper')}>
                        <h2 className={cx('countNum')}>{data.likes_count}</h2>
                        Thích
                    </span>
                </div>
                <div className={cx('story')}>
                    {(data.bio = '' ? data.bio : 'Chưa có tiểu sữ')}
                </div>
            </div>
            <div className={cx('list')}>
                <div className={cx('listMenu')}>
                    <button
                        className={cx('listMenu-btn', { active: active === 0 })}
                        onClick={() => setActive(0)}
                    >
                        Video
                    </button>
                    <button
                        className={cx('listMenu-btn', { active: active === 1 })}
                        onClick={() => setActive(1)}
                    >
                        <FontAwesomeIcon icon={faLock} className={cx('icon')} />
                        Yêu Thích
                    </button>
                    <button
                        className={cx('listMenu-btn', { active: active === 2 })}
                        onClick={() => setActive(2)}
                    >
                        <FontAwesomeIcon icon={faLock} className={cx('icon')} />
                        Đã Thích
                    </button>
                    <div
                        className={cx('border')}
                        style={{
                            transform: `translateX(${
                                active === 0
                                    ? active * 100 + 32 / 100
                                    : active === 1
                                    ? active * 100 + 25 + 32 / 100
                                    : active * 100 + active * 36 + 32 / 100
                            }%)`,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;
