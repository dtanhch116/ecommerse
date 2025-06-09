import { useEffect, useRef, useState } from 'react';

const useScrollHanding = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollDriction, setScrollDriction] = useState(null);
    const previousScrollPosition = useRef(0);

    const scrollChecking = () => {        
        const currentScrollposition = window.scrollY;

        if (currentScrollposition > previousScrollPosition.current) {
            setScrollDriction('down');
        } else if (currentScrollposition < previousScrollPosition.current) {
            setScrollDriction('up');
        }

        previousScrollPosition.current = currentScrollposition <= 0 ? 0 : currentScrollposition;
        setScrollPosition(currentScrollposition);
    }

    useEffect(() => {
            window.addEventListener('scroll', scrollChecking);
            
            return () => window.removeEventListener('scroll', scrollChecking);
        }, []);


    return {
        scrollDriction,
        scrollPosition
    }

}

export default useScrollHanding;