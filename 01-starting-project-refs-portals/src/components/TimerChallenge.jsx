import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const startTime = useRef();

    // this is the ref where we would attach methods. it is this ref which will then be used inside the
    // useImperativeHandle hook.
    const dialog = useRef();

    const [isActive, setIsActive] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(null);

    // Add cleanup for timer
    useEffect(() => {
        return () => clearTimeout(timer.current);
    }, []);

    const handleStart = () => {
        startTime.current = performance.now();
        setIsActive(true);
        timer.current = setTimeout(() => {
            handleStop(true);
        }, targetTime * 1000);
    };

    const handleStop = (expired) => {
        clearTimeout(timer.current);
        const endTime = performance.now();
        const elapsedTime = (endTime - startTime.current) / 1000;
        const timeDiff = expired
            ? null // Timer expired, no difference to show
            : Math.abs(elapsedTime - targetTime).toFixed(2); // Absolute difference from target
        setTimeRemaining(timeDiff);
        dialog.current.open();
    };

    const handleManualStop = () => handleStop(false);

    return (
        <>
            {createPortal(
                <ResultModal
                    ref={dialog}
                    targetTime={targetTime}
                    remainingTime={timeRemaining}
                />,
                document.getElementById("modal")
            )}
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime !== 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={isActive ? handleManualStop : handleStart}>
                        {isActive ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={isActive ? "active" : undefined}>
                    {isActive ? "Time is running..." : "Timer inactive"}
                </p>
            </section>
        </>
    );
}
