import classNames from 'classnames/bind';

import style from '~/pages/Profile/Profile.module.scss';

const cx = classNames.bind(style);

function ListVideo({ data }) {
    console.log(data);
    return (
        <div className={cx('listVideo-Wrapper')}>
            <video
                className={cx('video')}
                src={data.file_url}
                muted
                autoPlay
            ></video>
            <h5 className={cx('video-title')}>{data.description}</h5>
        </div>
    );
}

export default ListVideo;
