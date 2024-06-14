import classNames from 'classnames/bind';
import {
    faCloudArrowUp,
    faCropSimple,
    faFilm,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './Uploading.module.scss';
import Button from '~/components/Button';
import { useRef, useState } from 'react';
import { faFileVideo } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(style);

function Uploading() {
    const [file, setFile] = useState();
    const inputRef = useRef();

    const handleOnClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const handleOnChange = (e) => {
        console.log(e.target.files[0]);
        setFile(URL.createObjectURL(e.target.files[0]));
    };
    console.log(file);
    return (
        <div className={cx('wrapper')}>
            {!!file ? (
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
                        <h5>Tiêu đề video </h5>
                        <div className={cx('upload-before-data')}>
                            <span className={cx('data')}>
                                dung lượng :
                                <p className={cx('data-number')}>30MB</p>
                            </span>
                            <span className={cx('time')}>
                                Thời lượng :
                                <p className={cx('time-num')}>23s</p>
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
                                    type="text"
                                    className={cx(
                                        'upload-before-content-title-wrapper-input',
                                    )}
                                />
                                <p
                                    className={cx(
                                        'upload-before-content-title-wrapper-length',
                                    )}
                                >
                                    0/2200
                                </p>
                                <div className={cx('thumbnail_time')}>
                                    <p className={cx('img-time')}>
                                        Chụp ảnh bìa vào giây thứ mấy
                                    </p>
                                    <input
                                        type="text"
                                        className={cx('num-time')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Uploading;
