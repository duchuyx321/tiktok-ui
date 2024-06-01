import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Style from './Home.module.scss';
import Content from '~/components/Content';

const cx = classNames.bind(Style);

function Home() {
    const [render, setRender] = useState([]);
    useEffect(() => {}, []);
    return (
        <div className={cx('wrapper')}>
            <Content />
        </div>
    );
}

export default Home;
