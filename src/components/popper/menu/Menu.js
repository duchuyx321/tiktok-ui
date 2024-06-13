import PropTypes from 'prop-types';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/popper';
import MenuItem from '~/components/popper/menu/MenuItem';
import style from '~/components/popper/menu/Menu.module.scss';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';

const cx = classNames.bind(style);

const defaultFn = () => {};

function Menu({
    children,
    items = [],
    hiddenOnClick = false,
    nickname,
    onChange = defaultFn,
}) {
    console.log(items);

    const [history, setHistory] = useState([{ data: items }]); // tạo mảng chứa một oject item để có thể xử lí thêm xóa
    const current = history[history.length - 1];

    console.log(history);
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

    const RenderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && (
                    <Header title={current.title} onback={handleBackMenu} />
                )}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    // back menu
    const handleBackMenu = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1)); // lấy từ phần tử đầu đến gần cuối
    };

    // reset to fist menu

    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1)); // về lại vị trí đầu tiên
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            hideOnClick={hiddenOnClick}
            placement="bottom-end"
            render={RenderResult}
            onHide={handleResetMenu}
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
    nickname: PropTypes.string,
};

export default Menu;
