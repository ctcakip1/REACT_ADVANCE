import { useState } from "react";

import User from "./User";
const Homework26 = (props) => {
    const { data } = props;
    return (
        <div className="list-users">
            {data &&
                data.length > 0 &&
                data.map((item, index) => {
                    return (
                        <div key={`user-${index}`} className="detail-user">
                            <User data={item} />
                        </div>
                    );
                })}
        </div>
    );
};
export default Homework26;
