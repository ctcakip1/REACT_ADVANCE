import _ from "lodash";
const Lesson25 = (props) => {
    const person = {
        name: "abc",
        address: {
            city: "hn",
            country: "vn",
        },
        job: {
            title: "dev",
            detail: {
                position: "boss",
                salary: "5k",
            },
        },
    };
    let copyPerson = _.clone(person); // shallow copy
    copyPerson.job.title = "haha"
    console.log("check person", person, "copyPerson", copyPerson);

    let copyPerson1 = _.cloneDeep(person); // deep copy
    copyPerson.job.title = "haha"
    console.log("check person", person, "copyPerson", copyPerson1);

    return <div>Lesson 25;</div>;
};

export default Lesson25;
