import useScrollHanding from '@/hooks/useScrollHanding.js';
import { useEffect, useState } from 'react';


const useTranslateXImage = () => {
    const { scrollDriction, scrollPosition } = useScrollHanding();

    const [ translateX, setTranslateX ] = useState(50);
    
    
        const handleTranlateX = () => {
            if (scrollDriction === 'down' && scrollPosition >= 2000){
                setTranslateX(translateX <= 0 ? 0 : translateX - 1);
            } else if (scrollDriction === 'up') {
                setTranslateX(translateX >= 50 ? 50 : translateX + 1);
            }
        }    
        
    
        useEffect(() => {
            handleTranlateX();
    
        }, [scrollPosition]);
    
    
        return {
            translateX
        }
}

export default useTranslateXImage;