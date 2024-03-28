const Lesson20 = (props) => {
    let person = {
        name: 'Hỏi Dân IT',
        age: 25,
    };

    let member = person;

    member.age = 26;

    console.log(">>> check person: ", person); // age = 26
    console.log(">>> check member: ", member);// age = 26


    return (
        <div>
            Lesson 20: What's wrong with 'normal' assign/copy ?
        </div>
    )
}

export default Lesson20;