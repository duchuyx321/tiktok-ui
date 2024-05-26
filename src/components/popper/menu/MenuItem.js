import Button from '~/components/Button';

import style from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-items', {
        separate: data.separate,
    });
    return (
        <Button
            className={classes}
            leftIcon={data.iconLeft}
            to={data.to}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
