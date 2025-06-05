import { useEffect, useRef, useState } from 'react';


const useTranslateX = () => {
    const [ translateX, setTranslateX ] = useState(80);
    const [ scrollPosition, setScrollPosition ] = useState(0);

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

    const handleTranlateX = () => {
        if (scrollDriction === 'down' && scrollPosition >= 2000){
            setTranslateX(translateX <= 0 ? 0 : translateX - 1);
        } else if (scrollDriction === 'up') {
            setTranslateX(translateX >= 80 ? 80 : translateX + 1);
        }
    }    

    useEffect(() => {
        window.addEventListener('scroll', scrollChecking);

        return () => window.removeEventListener('scroll', scrollChecking);
    }, []);

    useEffect(() => {
        handleTranlateX();

    }, [scrollPosition]);


    return {
        translateX
    }
}

export default useTranslateX;