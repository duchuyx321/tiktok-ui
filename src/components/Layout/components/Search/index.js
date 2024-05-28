import classNames from 'classnames/bind';

import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // import thư viện icon vừa mới i về
import {
    faMagnifyingGlass,
    faCircleXmark,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import * as searchService from '~/apiService/searchService';
import style from '~/components/Layout/components/Search/Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/popper';
import AccountsItem from '~/components/AccountsItem';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);
    const inputRef = useRef();
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchAPI = async () => {
            setLoading(true);

            const result = await searchService.search(debounced);
            setSearchResult(result);

            setLoading(false);
        };
        fetchAPI();
    }, [debounced]);
    const HandleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus(); // khi xóa vẫn focus vào trong thẻ input
    };
    const handleHidden = () => {
        setShowResult(false);
    };
    return (
        <HeadlessTippy
            visible={searchResult.length > 0 && showResult}
            interactive={true}
            appendTo={document.body}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            {searchResult.map((result) => (
                                <AccountsItem key={result.id} data={result} />
                            ))}
                        </h4>
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHidden}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    type="text"
                    placeholder="Tìm Kiếm"
                    spellCheck={false} // không báo lỗi chính tả khi nhập
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    // btn clear
                    <button className={cx('clear')} onClick={HandleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* load  clear*/}
                {loading && (
                    <FontAwesomeIcon
                        icon={faSpinner}
                        className={cx('load')}
                    ></FontAwesomeIcon>
                )}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
