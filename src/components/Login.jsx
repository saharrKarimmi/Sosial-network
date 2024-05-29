import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const handleLogIn = async () => {
        const items = {userName: userName, password: password}
        if (userName.length && password.length) {
            try {
                const {data} = await axios.post("http://localhost:3000/account", items)
                if (data.status == 200) {
                    setUserName("");
                    setPassword("");
                }
            } catch (e) {
                alert("Error!")
            }
        } else {
            alert("Error!")
        }


    }
    return (
        <div className={" flex justify-center items-start"}>
            <div className={"flex flex-col p-28 border bg-indigo-950 gap-y-5 gap-x-2"}>
                <label className={"text-white font-bold text-lg"}>
                    Username :
                    <input type={"text"} placeholder={"Enter Name"} className={"bg-indigo-950 ml-2 px-2"}
                           onChange={(event) => setUserName(event.target.value)} value={userName}/>
                </label>
                <label className={"text-white font-bold text-lg"}>
                    Password :
                    <input type={"number"} placeholder={"Enter Phone Number"} className={"bg-indigo-950 ml-2 px-2"}
                           onChange={(event) => setPassword(event.target.value)} value={password}/>
                </label>

                <button className={"border rounded-lg font-bold text-indigo-950 text-xl p-2 mt-5 bg-white"}
                        type={"button"} onClick={handleLogIn}>Log In
                </button>
                <Link to={"/Sign in"} className={"text-white mt-3"}>
                    Forgot the password ?
                </Link>
                <Link to={"/Sign in"} className={"text-white"}>
                    Create Account ?
                </Link>
            </div>
        </div>
    );
};

export default Login;