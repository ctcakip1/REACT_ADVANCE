import { useState } from "react";
import { useImmer } from "use-immer";
const Lesson34 = (props) => {
    // const [name, setName] = useState('Hỏi Dân IT');
    const [name, setName] = useImmer("Hỏi Dân IT");

    const [person, setPerson] = useState({
        name: "Hỏi Dân IT",
        age: 25,
        education: {
            degree: "engineer",
            detail: {
                university: "hust",
                location: "Ha Noi",
            },
        },
    });

    const handleUpdateName = (e) => {
        //do sth
        setName(e.target.value);
    };
    const hanleSubmit = () => {
        console.log("check name", name);
    };
    return (
        <div>
            <div>Lesson34: Write concise update logic with Immer</div>
            <div>
                <input
                    type={"text"}
                    value={name}
                    onChange={(e) => {
                        handleUpdateName(e);
                    }}
                />
                <button onClick={hanleSubmit}> Submit</button>
            </div>
        </div>
    );
};

export default Lesson34;
