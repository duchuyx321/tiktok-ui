import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function MenuItem({ data, onClick = () => {} }, nickname) {
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

MenuItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
};

export default MenuItem;
