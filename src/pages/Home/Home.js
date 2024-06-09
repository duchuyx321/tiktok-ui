import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Style from './Home.module.scss';
import Content from '~/components/Content';
import * as videoService from '~/service/videoService';

const cx = classNames.bind(Style);

function Home() {
    const [render, setRender] = useState([]);
    const [newPage, setNewPage] = useState('1');

    useEffect(() => {
        const fetchAPI = async (page = newPage) => {
            const result = await videoService.videos('for-you', page);
            setRender(result);
        };
        window.addEventListener('beforeunload', fetchAPI());
        return () => window.removeEventListener('beforeunload', fetchAPI());
    }, [newPage]);
    return (
        <div className={cx('wrapper')}>
            {render.map((item) => (
                <Content key={item.id} data={item} />
            ))}
        </div>
    );
}

export default Home;
