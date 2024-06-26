import { useState } from "react";
import Timer from "./Timer";

const Lesson29 = (props) => {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <div>Lesson 29:</div>
            <>
                <div>Current number = {number}</div>
                <button onClick={() => {
                    setNumber(number + 5);
                    alert(number);
                }}>+5 units</button>
            </>

            <>
                <div>Current number = {number}</div>
                <button onClick={() => {
                    setNumber(number + 5);
                    setTimeout(() => {
                        alert(number);
                    }, 3000);
                }}>+5 units</button>
            </>
            {/* <Timer /> */}
        </div>
    );
};

export default Lesson29;
