import { TouchEvent, useState } from "react";

interface SwipeInput {
    onSwipedLeft?: () => void
    onSwipedRight?: () => void
    onSwipedUp?: () => void
    onSwipedDown?: () => void
}

interface SwipeOutput {
    onTouchStart: (e: TouchEvent) => void
    onTouchMove: (e: TouchEvent) => void
    onTouchEnd: () => void

}

export default function useSwipe(input: SwipeInput): SwipeOutput {
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);
    const [touchStartY, setTouchStartY] = useState(0);
    const [touchEndY, setTouchEndY] = useState(0);
    const minSwipeDistance = 50;

    const onTouchStart = (e: TouchEvent) => {
        e.stopPropagation();
        setTouchEndX(0); // otherwise the swipe is fired even with usual touch events
        setTouchEndY(0); // otherwise the swipe is fired
        setTouchStartX(e.targetTouches[0].clientX);
        setTouchStartY(e.targetTouches[0].clientY);
    }

    const onTouchMove = (e: TouchEvent) => {
        e.stopPropagation();
        setTouchEndX(e.targetTouches[0].clientX);
        setTouchEndY(e.targetTouches[0].clientY);
    };



    const onTouchEnd = () => {
        if (!touchStartX || !touchEndX || !touchStartY || !touchEndY) return;
        let distanceX = touchStartX - touchEndX;
        const isLeftSwipe = distanceX > minSwipeDistance;
        const isRightSwipe = distanceX < -minSwipeDistance;
        let distanceY = touchStartY - touchEndY;
        const isUpSwipe = distanceY > minSwipeDistance;
        const isDownSwipe = distanceY < -minSwipeDistance;

        if (Math.abs(distanceX) > Math.abs(distanceY)) {
            if (isLeftSwipe && input.onSwipedLeft) {
                input.onSwipedLeft();
            }

            if (isRightSwipe && input.onSwipedRight) {

                input.onSwipedRight();
            }
        }

        else {
            if (isUpSwipe && input.onSwipedUp) {
                input.onSwipedUp();
            }
            if (isDownSwipe && input.onSwipedDown) {
                input.onSwipedDown();
            }
        }
    }


    return {
        onTouchStart,
        onTouchMove,
        onTouchEnd
    }
}