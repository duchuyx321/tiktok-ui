import classNames from 'classnames/bind';
import { useState, useEffect, useCallback, useRef } from 'react';
import Style from './Home.module.scss';
import Content from '~/components/Content';
import * as videoService from '~/service/videoService';

const cx = classNames.bind(Style);

function Home() {
    const MaxPage = 34;
    const [render, setRender] = useState([]);
    const [page, setPage] = useState(Math.floor(Math.random() * MaxPage) + 1);

    const observer = useRef();

    const lastVideoElement = useCallback(
        (node) => {
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && page < MaxPage) {
                    setPage((prevPage) => prevPage + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [page, MaxPage],
    );

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await videoService.videos('for-you', page);
            setRender((props) => [...props, ...result]);
        };
        fetchAPI();
    }, [page]);
    return (
        <div className={cx('wrapper')}>
            {render.map((item, index) => {
                if (render.length === index + 1) {
                    return (
                        <Content
                            ref={lastVideoElement}
                            key={item.id}
                            data={item}
                        />
                    );
                } else {
                    return <Content key={item.id} data={item} />;
                }
            })}
        </div>
    );
}

export default Home;
