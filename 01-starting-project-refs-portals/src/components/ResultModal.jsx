import { useImperativeHandle, useRef } from "react";

export default function ResultModal({ ref, targetTime, remainingTime }) {
    const dialog = useRef();

    useImperativeHandle(ref, () => ({
        open: () => dialog.current.showModal(),
    }));

    // useImperativeHandle(parentRef, () => {
    //     return {
    //         open() {
    //             dialog.current.showModal();
    //         },
    //     };
    // });

    const isWin = remainingTime !== null && parseFloat(remainingTime) > 0;
    console.log(remainingTime);

    const headingText = isWin
        ? "You Won !! Congratulations !!"
        : "Timer Expired !!";
    const content = isWin
        ? `You stopped the timer with ${remainingTime} seconds remaining.`
        : "You lost... Better luck next time.";

    return (
        <dialog ref={dialog} className="result-modal">
            <h2>{headingText}</h2>
            <p>
                The target time was{" "}
                <strong>
                    {targetTime} second{targetTime !== 1 ? "s" : ""}
                </strong>
            </p>
            <p>{content}</p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
}
