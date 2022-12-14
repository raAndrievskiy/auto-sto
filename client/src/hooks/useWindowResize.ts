import {useEffect, useState} from 'react';

export const useWindowResize = function useWindowSize() {
    const [size, setSize] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {size, height};
};

