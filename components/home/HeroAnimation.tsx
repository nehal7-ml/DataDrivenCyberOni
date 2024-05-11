"use client";

import Lottie from "react-lottie";
import animationData from "@/public/lotties/hero-animation.json";
import { useMemo, useState } from "react";
import useWindowSize from "@/lib/hooks/use-window-size";
import Image from "next/image";

function HeroAnimation() {
    const { isDesktop } = useWindowSize();

    const size = useMemo(
        () => ({ width: isDesktop ? 410 : 300, height: isDesktop ? 410 : 300 }),
        [isDesktop],
    );

    return (
        <>
            <div className="relative" >
                <Lottie
                    
                    options={{
                        animationData: animationData,
                        rendererSettings: {
                            progressiveLoad: true,
                        }
                    }}
                    height={size.height}
                    width={size.width}
                />
             
            </div>
        </>
    );
}

export default HeroAnimation;
