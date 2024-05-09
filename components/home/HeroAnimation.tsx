'use client'

import Lottie from "react-lottie";
import animationData from '@/public/lotties/hero-animation.json';

function HeroAnimation() {
    return (
        <Lottie
            options={{
                animationData: animationData
            }}

        >

        </Lottie>
    );
}

export default HeroAnimation;