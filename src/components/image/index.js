import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';
import style from '~/components/image/image.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(style);
const Image = forwardRef(
    (
        {
            className,
            src,
            alt,
            fallback: CustomFallback = images.noImg,
            onError,
            ...props
        },
        ref,
    ) => {
        const [fallback, setFallback] = useState('');
        const handleOnError = () => {
            setFallback(CustomFallback);
        };
        return (
            <img
                className={cx(className, 'wrapper')}
                ref={ref}
                src={fallback || src}
                alt={alt}
                {...props}
                onError={handleOnError}
            />
        );
    },
);

export default Image;
