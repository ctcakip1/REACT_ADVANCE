import Homework26 from "../lesson26/Homework26";
import AddNewUser from "./AddNewUser";
import { useEffect, useState } from "react";
import { getUserWithPaginate } from "../../utils/apiService";

const Lesson27 = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchListUser();
    }, []);
    const fetchListUser = async () => {
        let res = await getUserWithPaginate(1, 3);
        console.log("resfetch", res);
        if (res && res.EC === 0) {
            setData(res?.DT?.users);
        }
    };
    const addNew = (user) => {
        console.log("check user", user);
        setData([user, ...data]);
    };

    return (
        <div>
            <div>Lift-Up-State</div>
            <AddNewUser addNew={addNew} />
            <Homework26 data={data} />
        </div>
    );
};

export default Lesson27;
