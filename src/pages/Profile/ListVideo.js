import classNames from 'classnames/bind';

import style from '~/pages/Profile/Profile.module.scss';

const cx = classNames.bind(style);

function ListVideo({}) {
    return (
        <div className={cx('listVideo-Wrapper')}>
            <video
                src={'dfsdfd'}
                className={cx('video')}
                loop
                muted
                autoPlay={true}
            ></video>
        </div>
    );
}

export default ListVideo;
