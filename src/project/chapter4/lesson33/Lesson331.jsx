import React, { useState } from "react";
import { useImmer } from "use-immer";

const Lesson331 = (props) => {
    // const [person, setPerson] = useState({
    //     username: "",
    //     email: "Hỏi Dân IT",
    //     password: "",
    // });

    // const [person, setPerson] = useState({
    //     username: "",
    //     email: "Hỏi Dân IT",
    //     password: "",
    //     address: {
    //         province: "Ha Noi",
    //         country: "Viet Nam",
    //     },
    // });
    const [person, setPerson] = useImmer({
        username: "",
        email: "Hỏi Dân IT",
        password: "",
        address: {
            province: "Ha Noi",
            country: "Viet Nam",
        },
    });

    const handleOnChangeCountry = (event) => {
        // person.username = event.target.value;
        //not merge
        // setPerson({ username: event.target.value });
        // spread syntax, overwrite username
        // setPerson({
        //     ...person,
        //     address: {
        //         ...person.address,
        //         country: event.target.value,
        //     },
        // });
        // useImmer
        setPerson((draft) => {
            // modify state (khong phai sua doi truc tiep state cua react)
            // sua doi thong qua draft
            draft.address.country = event.target.value;
        });
    };

    const handleSubmit = () => {
        console.log(">>> check data person: ", person);
    };

    const handleChangeInput = (event) => {
        console.log("check name", event.target.name);
        //one event handler for all (using name attribute)
        setPerson({ ...person, [event.target.name]: event.target.value });
    };
    return (
        <div>
            <div className="input-group">
                <label>Country</label>
                <input
                    type={"text"}
                    // value={person.username}
                    onChange={(event) => handleOnChangeCountry(event)}
                />
            </div>
            <div className="input-group">
                <label>Username</label>
                <input
                    type={"text"}
                    value={person.username}
                    onChange={(event) => handleChangeInput(event)}
                    name="username"
                />
            </div>
            <div className="input-group">
                <label>Email</label>
                <input
                    type={"email"}
                    value={person.email}
                    name="email"
                    onChange={(event) => handleChangeInput(event)}
                />
            </div>
            <div className="input-group">
                <label>Password</label>
                <input
                    type={"password"}
                    value={person.password}
                    name="password"
                    onChange={(event) => handleChangeInput(event)}
                />
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Lesson331;
