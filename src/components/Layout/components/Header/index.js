import style from '~/components/Layout/components/Header/Header.module.scss'
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // import thư viện icon vừa mới i về 
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);

console.log(images) // lấy default trong nó thì mới có ảnh

function Home () {
    return (
        <div className={cx("wrapper")}>
                <div className={cx("inner")}>
                    <img src={images.logo.default}  alt='tiktok' />
                    <div className={cx("search")}>
                        <input type='text' 
                            placeholder='Tìm Kiếm'
                            spellCheck = {false}  // không báo lỗi chính tả khi nhập
                         />

                         {/* clear */}
                        <button className={cx('clear')}>
                            <FontAwesomeIcon 
                                icon={faCircleXmark} 
                                className={cx('clear-icon')}
                            >
                            </FontAwesomeIcon>
                        </button>

                        {/* load  clear*/}
                        <FontAwesomeIcon icon={faSpinner} className={cx("load")}></FontAwesomeIcon>
                        <button className={cx("search-btn")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        </button>
                    </div>
                    <div className={cx("action")}></div>
                </div>
        </div>
    )
}

export default Home;