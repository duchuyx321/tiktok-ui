import classNames from 'classnames/bind';
import {
    faMusic,
    faPause,
    faPlay,
    faVolumeHigh,
    faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef, useEffect } from 'react';

import Style from './Content.module.scss';
import vd from '~/Video/Ronaldo.mp4';

const cx = classNames.bind(Style);
function Content() {
    const [pause, setPause] = useState(false);
    const [width, setWidth] = useState('0');
    const [widthVolume, setWidthVolume] = useState('10');
    const [volume, setVolume] = useState('0.1');
    const [duration, setDuration] = useState('0');
    const [draw, setDraw] = useState('0');
    const videoRef = useRef();
    useEffect(() => {
        const video = videoRef.current;
        const handlePlayPause = () => {
            if (!pause) {
                video.pause();
            } else {
                video.play();
            }
        };

        const handleOnVolume = () => {
            video.volume = volume;
        };

        handleOnVolume();
        handlePlayPause();
    }, [pause, volume]);

    useEffect(() => {
        const video = videoRef.current;

        const handleLoadedMetadata = () => {
            const value = parseFloat(video.duration);
            setDuration(value);
        };

        const handleTimeUpdate = () => {
            let value = (parseFloat(video.currentTime) / duration) * 100;
            setDraw(value);
        };
        const handleWidth = () => {
            setWidth(333 * (draw / 100));
        };
        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        handleWidth();
        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, [draw, duration]);
    const handleOnChange = (e) => {
        let value = parseFloat(e);
        value = 330 * (value / 100);
        setWidth(value);
    };

    const handleOnChangeVolume = (item) => {
        setWidthVolume(item.target.value);
        let value = parseFloat(item.target.value) / 100;
        setVolume(value);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-video')}>
                <video
                    autoPlay
                    src={vd}
                    className={cx('video')}
                    ref={videoRef}
                    loop
                    preload="true"
                    onVolumeChange={() => widthVolume}
                ></video>
                <div className={cx('volume')}>
                    <button className={cx('volume-btn')}>
                        {widthVolume === '0' ? (
                            <FontAwesomeIcon icon={faVolumeXmark} />
                        ) : (
                            <FontAwesomeIcon icon={faVolumeHigh} />
                        )}
                    </button>
                    <span className={cx('volume-background')}>
                        <input
                            type="range"
                            className={cx('volume-input')}
                            min="0"
                            max="100"
                            value={widthVolume}
                            onChange={(item) => {
                                handleOnChangeVolume(item);
                            }}
                        />
                    </span>
                </div>
                <div className={cx('describe')}>
                    <button>duchuyx321</button>
                    <div className={cx('content')}>
                        Thời gian trôi qua thật nhanh , cứ ngỡ như ngày hôm qua
                        a ấy vẫn đang còn ở Real Madrid
                    </div>
                    <div>
                        <p className={cx('hashtag')}>#xuhuong </p>
                        <p className={cx('props-music')}>
                            <FontAwesomeIcon icon={faMusic} />
                            <span className={cx('title')}>
                                Nhạc nền - duchuyx321
                            </span>
                        </p>
                    </div>
                </div>
                <div className={cx('controls')}>
                    <button
                        className={cx('controls-btn')}
                        onClick={() => setPause(!pause)}
                    >
                        {pause ? (
                            <FontAwesomeIcon icon={faPause} />
                        ) : (
                            <FontAwesomeIcon icon={faPlay} />
                        )}
                    </button>
                    <span className={cx('navbar')}>
                        <input
                            type="range"
                            className={cx('navbar-input', 'zoom-in')}
                            min="0"
                            max="100"
                            onInput={(e) => {
                                handleOnChange(e.target.value);
                            }}
                        />
                        <span
                            className={cx('draw', 'zoom-in')}
                            style={{ width: width }}
                        ></span>
                    </span>
                </div>
            </div>

            <div className={cx('toggle')}></div>
        </div>
    );
}

export default Content;
