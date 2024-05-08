'use client'

import Lottie from "react-lottie";
import animationData from '@/public/lotties/hero-animation.json';

function HeroAnimation() {
    return (
        <Lottie
            options={{
                animationData: animationData
            }}
            height={500}
            width={500}
        >

        </Lottie>
    );
}

export default HeroAnimation;