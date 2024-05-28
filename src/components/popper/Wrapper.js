import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Styles from './popper.module.scss';

const cx = classNames.bind(Styles);

function wrapper({ children, classNames }) {
    return <div className={cx('wrapper', classNames)}>{children}</div>;
}

wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    classNames: PropTypes.string,
};
export default wrapper;
