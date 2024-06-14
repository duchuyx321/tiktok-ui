import classNames from 'classnames/bind';
import {
    faCloudArrowUp,
    faCropSimple,
    faFilm,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import style from './Uploading.module.scss';
import Button from '~/components/Button';
import { useEffect, useRef, useState } from 'react';
import * as uploadService from '~/service/uploadService';
import { faFileVideo } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(style);

function Uploading() {
    const [file, setFile] = useState();
    const [description, setDescription] = useState('');
    const [render, setRender] = useState({});
    const [videoDuration, setVideoDuration] = useState(0);
    const [content, setContent] = useState('');
    const [isFile, setIsFile] = useState(false);
    const inputRef = useRef();
    const videoRef = useRef();

    useEffect(() => {
        const video = videoRef.current;
        if (isFile) {
            if (
                video &&
                video.duration !== Infinity &&
                !isNaN(video.duration)
            ) {
                setVideoDuration(video.duration);
            }
        }
    }, [isFile]);

    const navigate = useNavigate();

    const handleOnClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const handleOnChange = (e) => {
        setDescription(e.target.files[0]);
        setFile(URL.createObjectURL(e.target.files[0]));
        setIsFile(true);
        setContent(e.target.files[0].name);
    };

    const handleOnPost = () => {
        const fetchAPI = async () => {
            const result = await uploadService.create(content, file);
            setRender(result);
        };
        fetchAPI();
    };
    console.log(render);

    const handleOnCancel = () => {
        navigate('/');
    };

    const handleOnContent = (e) => {
        setContent(e);
    };

    const convertMB = (num) => {
        return (num / (1024 * 1024)).toFixed(2);
    };

    return (
        <div className={cx('wrapper')}>
            {!isFile ? (
                <div className={cx('wrapper-upload')}>
                    <label htmlFor="upload">
                        <div className={cx('layout')}>
                            <div className={cx('upload')}>
                                <FontAwesomeIcon icon={faCloudArrowUp} />
                                <h2 className={cx('upload-title')}>
                                    Chọn video tải lên
                                </h2>
                                <Button
                                    primary
                                    className={cx('upload-btn')}
                                    onClick={handleOnClick}
                                >
                                    Chọn Video
                                </Button>
                                <input
                                    type="file"
                                    accept="video/*"
                                    ref={inputRef}
                                    onChange={(e) => handleOnChange(e)}
                                    className={cx('upload-input')}
                                />
                            </div>
                        </div>
                    </label>
                    <div className={cx('wrapper-upload-title')}>
                        <div className={cx('title-box')}>
                            <FontAwesomeIcon icon={faVideo} />
                            <div className={cx('content')}>
                                <h5 className={cx('content-h5')}>
                                    Dung lượng và thời lượng
                                </h5>
                                <p className={cx('content-p')}>
                                    Dung lượng tối đa : 10GB, thời lượng video
                                    60 phút
                                </p>
                            </div>
                        </div>
                        <div className={cx('title-box')}>
                            <FontAwesomeIcon icon={faFileVideo} />
                            <div className={cx('content')}>
                                <h5 className={cx('content-h5')}>
                                    Định dạng tệp tin
                                </h5>
                                <p className={cx('content-p')}>
                                    Đề xuất: “.mp4”. Có hỗ trợ các định dạng
                                    chính khác
                                </p>
                            </div>
                        </div>
                        <div className={cx('title-box')}>
                            <FontAwesomeIcon icon={faFilm} />
                            <div className={cx('content')}>
                                <h5 className={cx('content-h5')}>
                                    Độ phân giải video
                                </h5>
                                <p className={cx('content-p')}>
                                    Độ phân giải tối thiểu: 720p. Có hỗ trợ 2K
                                    và 4K.
                                </p>
                            </div>
                        </div>
                        <div className={cx('title-box')}>
                            <FontAwesomeIcon icon={faCropSimple} />
                            <div className={cx('content')}>
                                <h5 className={cx('content-h5')}>
                                    Tỷ lệ khung hình
                                </h5>
                                <p className={cx('content-p')}>
                                    Đề xuất: 16:9 cho chế độ ngang, 9:16 cho chế
                                    độ dọc.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={cx('wrapper-upload-before')}>
                    <div className={cx('upload-before-title')}>
                        <h5 className={cx('upload-before-title-h5')}>
                            {description.name}
                        </h5>
                        <div className={cx('upload-before-data')}>
                            <span className={cx('data')}>
                                dung lượng :
                                <p className={cx('data-number')}>
                                    {`${convertMB(description.size)}MB`}
                                </p>
                            </span>
                            <span className={cx('data')}>
                                Thời lượng :
                                <p className={cx('data-number')}>
                                    {Math.floor(videoDuration)}
                                </p>
                            </span>
                        </div>
                        <div className={cx('upload-before-content')}>
                            <h6 className={cx('upload-before-content-title')}>
                                Mô tả
                            </h6>
                            <div
                                className={cx(
                                    'upload-before-content-title-wrapper',
                                )}
                            >
                                <input
                                    value={content}
                                    type="text"
                                    className={cx(
                                        'upload-before-content-title-wrapper-input',
                                    )}
                                    onChange={(e) =>
                                        handleOnContent(e.target.value)
                                    }
                                />
                                <p
                                    className={cx(
                                        'upload-before-content-title-wrapper-length',
                                    )}
                                >
                                    {content.length}/2200
                                </p>
                            </div>
                            <div className={cx('upload-before-btn')}>
                                <Button
                                    primary
                                    className={cx('post')}
                                    onClick={handleOnPost}
                                >
                                    Đăng
                                </Button>
                                <Button
                                    outline
                                    className={cx('cancel')}
                                    onClick={handleOnCancel}
                                >
                                    Hủy bỏ
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('upload-video')}>
                        <video
                            muted
                            src={file}
                            autoPlay
                            ref={videoRef}
                            loop
                            controls
                            className={cx('video')}
                        ></video>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Uploading;
