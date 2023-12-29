import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const HeroAnimation = () => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        const fetchAnimationData = async () => {
            const animation = await import(
                '../../../public/assets/hero_animation_data.json'
            );
            setAnimationData(animation.default);
        };

        fetchAnimationData();
    }, []);

    return animationData ? (
        <Lottie
            animationData={animationData}
            loop={false} 
            priority
        />
    ) : null;
};

export default HeroAnimation;
