import classNames from 'classnames/bind';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

import style from './LoginRegister.module.scss';
import Button from '~/components/Button';
import * as loginService from '~/service/loginService';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function LoginRegister() {
    const [hiddenPass, setHiddenPass] = useState(false);
    const [change, setChange] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const [render, setRender] = useState(true);
    const [loading, setLoading] = useState(false);

    const Navigate = useNavigate();
    const handleLogin = async () => {
        setLoading(true);
        if (!email || password === '') {
            console.error('Không có email || password');
        }
        const result = await loginService.login(email, password);

        if (result?.meta?.token) {
            localStorage.setItem('token', result.meta.token);
            Navigate('/');
            window.location.reload();
            setRender(false);
        }
        if (result?.request && result.request.status === 401) {
            setIsError(true);
            console.log(result.code);
        }
        setLoading(false);
    };
    return (
        render && (
            <div className={cx('wrapper')}>
                <div className={cx('wrapper-login')}>
                    <div className={cx('from-login')}>
                        <div className={cx('from-login-wrapper')}>
                            <h1 className={cx('title-login')}>Đăng Nhập</h1>
                            <input
                                type="email"
                                className={cx('inputLogin')}
                                placeholder="Nhập địa chỉ Email"
                                onChange={(e) => {
                                    setIsEmail(e.target.validity.valid);
                                    setEmail(e.target.value);
                                }}
                            />
                            <div className={cx('passLogin')}>
                                <input
                                    type={hiddenPass ? 'text' : 'password'}
                                    className={cx('inputLogin')}
                                    placeholder="Nhập mật khẩu "
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                <button
                                    className={cx('hiddenPass')}
                                    onClick={() => setHiddenPass(!hiddenPass)}
                                >
                                    {hiddenPass ? (
                                        <FontAwesomeIcon icon={faEye} />
                                    ) : (
                                        <FontAwesomeIcon icon={faEyeSlash} />
                                    )}
                                </button>
                            </div>
                            {isError && (
                                <p className={cx('title-error')}>
                                    Email hoặc mật khẩu không đúng
                                </p>
                            )}
                            <Button
                                primary
                                large
                                disabled={!isEmail || password === ''}
                                className={cx('login-btn')}
                                onClick={handleLogin}
                            >
                                {loading && (
                                    <FontAwesomeIcon
                                        icon={faSpinner}
                                        className={cx('login-loading')}
                                    />
                                )}
                                Đăng Nhập
                            </Button>
                        </div>
                    </div>
                    <div className={cx('changeFrame')}>
                        <p className={cx('changeFrame-title')}>
                            {!change
                                ? 'Bạn chưa có tài khoản?'
                                : 'Bạn đã có tài khoản'}
                        </p>
                        <button
                            className={cx('changeFrame-btn')}
                            onClick={() => setChange(!change)}
                        >
                            {change ? ' Đăng nhập' : ' Đăng kí'}
                        </button>
                    </div>
                </div>
            </div>
        )
    );
}

export default LoginRegister;
