import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: "" });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            var account = await client.signup(credentials);
            if(account)
            {
                navigate("/Kanbas/Account");
            }
            else
            {
                alert("Account creation failed");
            }

        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <div>
            <h1>Signup</h1>
            <br></br>
            {error && <div>{error}</div>}
            <input className={"form-control w-25"}
                value={credentials.username}
                   placeholder={"Enter username"}
                onChange={(e) => setCredentials({
                    ...credentials,
                    username: e.target.value })} />
            <input className={"form-control w-25"}
                type={"password"}
                     placeholder={"Enter password"}
                value={credentials.password}
                onChange={(e) => setCredentials({
                    ...credentials,
                    password: e.target.value })} />
            <button onClick={signup} className={"btn btn-primary mt-1 "} style={{borderRadius: 0, backgroundColor:"red"}} >
                Signup
            </button>
        </div>
    );
}
export default Signup;