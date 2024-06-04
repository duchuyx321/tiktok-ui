import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Style from './Home.module.scss';
import Content from '~/components/Content';
import * as videoService from '~/service/videoService';

const cx = classNames.bind(Style);

function Home() {
    const [render, setRender] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await videoService.videos();
            setRender(result);
        };
        window.addEventListener('beforeunload', fetchAPI());
        return () => window.removeEventListener('beforeunload', fetchAPI());
    }, []);
    return (
        <div className={cx('wrapper')}>
            {render.map((item) => (
                <Content key={item.id} data={item} />
            ))}
        </div>
    );
}

export default Home;
