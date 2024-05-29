import './App.css';
import Signup from "./components/Signup";
import Login from "./components/Login";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="bg-gray-900 h-screen w-full flex justify-center items-center">
            <Routes>

                <Route path={"/Sign in"} element={<Signup/>}/>
                <Route path={"/Log in"} element={<Login/>}/>
            </Routes>

        </div>
    );
}

export default App;
