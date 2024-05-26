export const LogoTiktok = ({
    width = '118',
    height = '42',
    currentColor = '#333',
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="currentColor"
            alt="TikTok"
        >
            <use xlinkHref="#logo-dark-c4561408"></use>
        </svg>
    );
};

export const MessageIcon = ({
    width = '2.6rem',
    height = '2.6rem',
    className,
    currentColor = '#333',
}) => (
    <svg
        className={className}
        width={width}
        data-e2e=""
        height={height}
        viewBox="0 0 48 48"
        fill={currentColor}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z"
        ></path>
    </svg>
);

export const NotifyIcon = ({
    width = '3.2rem',
    height = '3.2rem',
    className,
    currentColor = '#333',
}) => (
    <svg
        className={className}
        width={width}
        data-e2e=""
        height={height}
        viewBox="0 0 48 48"
        color={currentColor}
        fill={currentColor}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.4977 9C10.1195 9 9.0013 10.1153 8.99767 11.4934L8.94239 32.4934C8.93875 33.8767 10.0591 35 11.4424 35H18.7895L22.0656 39.004C23.0659 40.2265 24.9352 40.2264 25.9354 39.0039L29.2111 35H36.5587C37.942 35 39.0623 33.8767 39.0587 32.4934L39.0029 11.4934C38.9993 10.1152 37.8811 9 36.5029 9H11.4977ZM29 21H19C18.4477 21 18 21.4477 18 22V23C18 23.5523 18.4477 24 19 24H29C29.5523 24 30 23.5523 30 23V22C30 21.4477 29.5523 21 29 21Z"
        ></path>
    </svg>
);
