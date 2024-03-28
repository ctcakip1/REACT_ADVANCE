import { useState } from "react";

const AddNewUser = (props) => {
    const [id, setId] = useState("");
    const [username, setUsername] = useState("");
    const [image, setImage] = useState("");
    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    const handleOnChangeFile = async (e) => {
        if (e.target.value && e.target.files && e.target.files[0]) {
            let strToReplace = await toBase64(e.target.files[0]);
            let strImage = strToReplace.replace(
                /^data:image\/[a-z]+;base64,/,
                ""
            );
            setImage(strImage);
        }
    };
    const hanldeCreateNewUser = () => {
        if (!id || !username || !image) {
            alert("invalid input");
            return;
        }
        props.addNew({
            id: id,
            username: username,
            image: image,
        });
    };
    return (
        <div>
            <form>
                <fieldset>
                    <legend>Add new user:</legend>
                    <div>
                        <label>ID</label>
                        <input
                            value={id}
                            type="text"
                            onChange={(e) => {
                                setId(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label>UserName</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label>Image</label>
                        <input
                            type="file"
                            onChange={(e) => {
                                handleOnChangeFile(e);
                            }}
                        />
                    </div>
                    <button
                        type="button"
                        style={{ border: "1px solid red" }}
                        onClick={() => {
                            hanldeCreateNewUser();
                        }}
                    >
                        Save
                    </button>
                </fieldset>
            </form>
        </div>
    );
};
export default AddNewUser;
