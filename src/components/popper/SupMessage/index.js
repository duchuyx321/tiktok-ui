import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from '~/components/popper/SupMessage/SupMessage.module.scss';

const cx = classNames.bind(style);

function SupMessage({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

SupMessage.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SupMessage;
