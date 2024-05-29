import React, {useState} from 'react';
import axios from "axios";

const Signup = () => {
    const [name, setName] = useState("")
    const [lastName, setLstNme,] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [emailAddress, setEmailAddress] = useState("")

    const handleButtonLogin = async () => {
        const items = {name: name, lastName: lastName, phoneNumber: phoneNumber, emailAddress: emailAddress}
        if (name.length && lastName.length && phoneNumber.length && emailAddress.length) {
            try {
                const {data} = await axios.post("http://localhost:3000/account", items)
                if (data.status == 200) {
                    setPhoneNumber("");
                    setEmailAddress("");
                    setLstNme("");
                    setName("")
                } else {
                    alert("Error!")
                }
            } catch (e) {
                alert("Error!")
            }
        } else {
            alert("Error!")
        }

    }
    return (
        <div>
            <div className={" flex justify-center items-start"}>
                <div className={"flex flex-col p-28 border bg-indigo-950 gap-y-5 gap-x-2"}>
                    <label className={"text-white font-bold text-lg"}>
                        Name :
                        <input type={"text"} placeholder={"Enter Name"} className={"bg-indigo-950 ml-2 px-2"}/>
                    </label>
                    <label className={"text-white font-bold text-lg"}>
                        LastName :
                        <input type={"text"} placeholder={"Enter LastName"} className={"bg-indigo-950 ml-2 px-2 "}/>
                    </label>
                    <label className={"text-white font-bold text-lg"}>
                        Phone Number :
                        <input type={"number"} placeholder={"Enter Phone Number"}
                               className={"bg-indigo-950 ml-2 px-2"}/>
                    </label>
                    <label className={"text-white font-bold text-lg"}>
                        Email Address :
                        <input type={"email"} placeholder={"Enter Email Address"}
                               className={"bg-indigo-950  ml-2 px-2"}/>
                    </label>
                    <button className={"border rounded-lg font-bold text-indigo-950 text-xl p-2 mt-5 bg-white"}
                            type={"button"} onClick={handleButtonLogin}>Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;