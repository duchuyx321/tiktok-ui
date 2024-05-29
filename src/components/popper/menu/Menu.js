import PropTypes from 'prop-types';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/popper';
import MenuItem from '~/components/popper/menu/MenuItem';
import style from '~/components/popper/menu/Menu.module.scss';
import classNames from 'classnames/bind';
import Header from './Header';

const cx = classNames.bind(style);

const defaultFn = () => {};

function Menu({
    children,
    items = [],
    hiddenOnClick = false,
    onChange = defaultFn,
}) {
    const [history, setHistory] = useState([{ data: items }]); // tạo mảng chứa một oject item để có thể xử lí thêm xóa
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children; // đẩy sang kiểu boolean
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            hideOnClick={hiddenOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onback={() => {
                                    setHistory((prev) =>
                                        prev.slice(0, prev.length - 1),
                                    ); // lấy từ phần tử đầu đến gần cuối
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))} // về lại vị trí đầu tiên
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hiddenOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
