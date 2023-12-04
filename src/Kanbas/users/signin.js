import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const signin = async () => {
        var account = await client.signin(credentials);
        if (account) {
            navigate("/Kanbas/Account");
        }
        else {
            alert("Invalid username or password");
        }
    };
    return (
        <div>
            <h1>Signin</h1>
            <br></br>
            <input className="w-25 form-control" placeholder="Enter username" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
            <input className="w-25  form-control" type="password" placeholder="Enter password" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
            <button className="btn btn-primary mt-1" style={{borderRadius: 0, backgroundColor:"red"}} onClick={signin}> Signin </button>
        </div>
    );
}
export default Signin;