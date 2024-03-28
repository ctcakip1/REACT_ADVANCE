const Lesson7 = (props) => {
    function myFun() {
        console.log("func ");
    }
    myFun();
    let a = () => {
        console.log("Anonymous Function ");
    };
    a();
    return (
        <div style={{ padding: "50px" }}>
            <h3>Lesson 7 Anonymous Function:</h3>
        </div>
    );
};

export default Lesson7;
