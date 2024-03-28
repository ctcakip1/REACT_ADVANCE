import "./Lesson8.scss";

const Lesson8 = (props) => {
    // function handleOnClick1() {
    //     alert('click me')
    // }

    const handleOnClick2 = () => {
        alert("click me");
    };
    // running (execute) vs passing func
    return (
        <div className="lesson8">
            <h3>Lesson 8 :</h3>
            <div>
                <button
                // onClick={handleOnClick2} // passing func
                // onClick={handleOnClick2()} // running func => () exec
                >
                    Tham Chiếu
                </button>
            </div>
            <div>
                <button
                // onClick={alert("me")}
                >
                    Inline
                </button>
            </div>
            <div>
                <button
                    onClick={() => {
                        alert("me");
                    }}
                >
                    Arrow function
                </button> 
            </div>
        </div>
    );
};

export default Lesson8;
