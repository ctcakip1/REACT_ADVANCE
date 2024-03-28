import { useState } from "react";

const Lesson28 = () => {
    const [number, setNumber] = useState(0);

    const handleIncrease = () => {
        // this.state({state}, callback)
        // react hook khong co callback when set state
        // react hook: setState(state)
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
        //queue
        // fix snapshot
        // setNumber(number => number + 1);
        // setNumber(number => number + 1);
        // setNumber(number => number + 1);
    };

    return (
        <div>
            <div>Lesson 28: Broken button:</div>
            <button onClick={handleIncrease}>+3 units</button>
            <div>Number = {number}</div>
        </div>
    );
};

export default Lesson28;
