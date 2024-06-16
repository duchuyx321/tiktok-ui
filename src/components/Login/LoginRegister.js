import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

import style from './LoginRegister.module.scss';
import Button from '~/components/Button';
import * as loginService from '~/service/loginService';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(style);

function LoginRegister() {
    const [hiddenPass, setHiddenPass] = useState(false);
    const [change, setChange] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isEmailAgain, setIsEmailAgain] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isErrorAgain, setIsErrorAgain] = useState(false);
    const [render, setRender] = useState(true);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [again, setAgain] = useState('');
    const [password, setPassword] = useState('');

    const debounceAgainEmail = useDebounce(again.trim(), 500);
    const debounceEmail = useDebounce(email.trim(), 500);

    const Navigate = useNavigate();

    useEffect(() => {
        if (debounceAgainEmail !== debounceEmail) {
            setIsErrorAgain(true);
        } else {
            setIsErrorAgain(false);
        }
    }, [debounceAgainEmail, debounceEmail, isErrorAgain]);

    const handleLogin = async () => {
        setLoading(true);
        if (!change) {
            if (!email || password === '') {
                console.error('Không có email || password');
            }
            const result = await loginService.login(debounceEmail, password);

            if (result?.meta?.token) {
                localStorage.setItem('token', result.meta.token);
                Navigate('/');
                window.location.reload();
                setRender(false);
            } else if (result?.request && result.request.status === 401) {
                setIsError(true);
                console.log(result.code);
            }
        } else {
            if (!email || password === '' || !isEmailAgain) {
                console.error(
                    'không có Email || nhập lại isEmailAgain || password',
                );
            }

            const result = await loginService.register(debounceEmail, password);
            if (result?.meta?.token) {
                localStorage.setItem('token', result.meta.token);
                Navigate('/');
                window.location.reload();
                setRender(false);
            } else if (result?.request && result.request.status === 401) {
                setIsError(true);
                console.log(result.code);
            }
        }
        setLoading(false);
    };

    return (
        render && (
            <div className={cx('wrapper')}>
                <div className={cx('wrapper-login')}>
                    <div className={cx('from-login')}>
                        <div className={cx('from-login-wrapper')}>
                            <h1 className={cx('title-login')}>
                                {change ? 'Đăng Kí' : 'Đăng Nhập'}
                            </h1>
                            <input
                                type="email"
                                className={cx('inputLogin')}
                                placeholder="Nhập địa chỉ Email"
                                onChange={(e) => {
                                    setIsEmail(e.target.validity.valid);
                                    setEmail(e.target.value);
                                }}
                            />
                            {change && (
                                <input
                                    type="email"
                                    className={cx('inputLogin')}
                                    placeholder="Nhập lại địa chỉ Email"
                                    onChange={(e) => {
                                        setIsEmailAgain(
                                            e.target.validity.valid,
                                        );
                                        setAgain(e.target.value);
                                    }}
                                />
                            )}
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
                            {isErrorAgain && (
                                <p className={cx('title-error')}>
                                    Email nhập lại không đúng
                                </p>
                            )}
                            <Button
                                primary
                                large
                                disabled={
                                    !isEmail || isErrorAgain || password === ''
                                }
                                className={cx('login-btn')}
                                onClick={handleLogin}
                            >
                                {loading && (
                                    <FontAwesomeIcon
                                        icon={faSpinner}
                                        className={cx('login-loading')}
                                    />
                                )}
                                {change ? 'Đăng Kí' : 'Đăng Nhập'}
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
