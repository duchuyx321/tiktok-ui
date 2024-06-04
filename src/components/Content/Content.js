/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import {
    faBookmark,
    faCommentDots,
    faHeart,
    faMusic,
    faPause,
    faPlay,
    faShare,
    faVolumeHigh,
    faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef, useEffect } from 'react';

import Style from './Content.module.scss';
import { useElementOnScreen } from '~/hooks';

const cx = classNames.bind(Style);
function Content({ data }) {
    const [playing, setPlaying] = useState(false);
    const [width, setWidth] = useState('0');
    const [widthVolume, setWidthVolume] = useState('10');
    const [volume, setVolume] = useState('0.1');
    const [duration, setDuration] = useState('0');
    const [draw, setDraw] = useState('0');
    const videoRef = useRef();

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
    };

    const isVisible = useElementOnScreen(options, videoRef);
    useEffect(() => {
        const video = videoRef.current;

        const handleOnVolume = () => {
            video.volume = volume;
        };

        const handleAutoPlayVideo = () => {
            if (isVisible) {
                if (!playing) {
                    video.play();
                    setPlaying(true);
                }
            } else {
                if (playing) {
                    video.pause();
                    setPlaying(false);
                }
            }
        };

        handleOnVolume();
        handleAutoPlayVideo();
    }, [isVisible, volume]);

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
        const video = videoRef.current;
        let value = parseFloat(e);
        console.log(value);
        let newTime = (value / 100) * duration;
        video.currentTime = newTime;
        let newWidth = 280 * (value / 100);
        console.log(newWidth);
        setWidth(newWidth);
        setDraw(newWidth);
    };

    const handleOnChangeVolume = (item) => {
        setWidthVolume(item.target.value);
        let value = parseFloat(item.target.value) / 100;
        setVolume(value);
    };

    const togglePlayPase = () => {
        if (playing) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setPlaying(!playing);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-video')}>
                <video
                    src={data.file_url}
                    className={cx('video')}
                    ref={videoRef}
                    loop
                    autoPlay={true}
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
                    <button>{data.user.nickname}</button>
                    <div className={cx('content')}>{data.description}</div>
                    <div>
                        <p className={cx('hashtag')}>#xuhuong </p>
                        <p className={cx('props-music')}>
                            <FontAwesomeIcon icon={faMusic} />
                            <span className={cx('title')}>
                                {data.music === ' '
                                    ? `nhạc nền - ${data.user.nickname}`
                                    : `nhạc nền - ${data.music}`}
                            </span>
                        </p>
                    </div>
                </div>
                <div className={cx('controls')}>
                    <button
                        className={cx('controls-btn')}
                        onClick={() => togglePlayPase()}
                    >
                        {playing ? (
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
                            style={{ width: `${width}px` }}
                        ></span>
                    </span>
                </div>
            </div>

            <div className={cx('toggle')}>
                <div className={cx('toggle-wrapper')}>
                    <button className={cx('toggle-btn')}>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className={cx('toggle-heart')}
                        />
                    </button>
                    <h5 className={cx('toggle-title')}> {data.likes_count} </h5>
                </div>

                <div className={cx('toggle-wrapper')}>
                    <button className={cx('toggle-btn')}>
                        <FontAwesomeIcon icon={faCommentDots} />
                    </button>
                    <h5 className={cx('toggle-title')}>
                        {' '}
                        {data.comments_count}{' '}
                    </h5>
                </div>

                <div className={cx('toggle-wrapper')}>
                    <button className={cx('toggle-btn')}>
                        <FontAwesomeIcon
                            icon={faBookmark}
                            className={cx('toggle-favourite')}
                        />
                    </button>
                    <h5 className={cx('toggle-title')}> {data.likes_count} </h5>
                </div>

                <div className={cx('toggle-wrapper')}>
                    <button className={cx('toggle-btn')}>
                        <FontAwesomeIcon
                            icon={faShare}
                            className={cx('toggle-share')}
                        />
                    </button>
                    <h5 className={cx('toggle-title')}>{data.shares_count}</h5>
                </div>
            </div>
        </div>
    );
}

export default Content;
