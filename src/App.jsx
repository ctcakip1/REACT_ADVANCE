import { useState } from "react";
import "./App.css";
import NavBar from "./components/Header/NavBar";
import Content from "./components/Main/Content";
import Footer from "./components/Footer/Footer";
import Lesson8 from "./lessons/Lesson8/Lesson8";
import Lesson9 from "./lessons/Lesson9/Lesson9";
import Lesson10 from "./lessons/Lesson10/Lesson10";
import Project from "./project/Project";
import Lesson17 from "./project/chapter3/Lesson17";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <NavBar />
            {/* <Content
        count={count}
        setCount={setCount}
      /> */}
            <Project />

            <Footer />
        </div>
    );
};

export default App;
