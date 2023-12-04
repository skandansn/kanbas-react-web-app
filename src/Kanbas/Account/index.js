import * as client from "../users/client";
import { useState, useEffect } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
function Account() {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };

    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/Signin");
    };


    const save = async () => {
        await client.updateUser(account);
    };

    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, []);
    return (
        <div className="w-50">
            {account && (
                <div>
                    <input placeholder={"Enter password"} type="password" className="form-control mt-2" value={account.password}
                           onChange={(e) => setAccount({ ...account,
                               password: e.target.value })}/>
                    <input placeholder={"Enter First Name"} className="form-control mt-2" value={account.firstName}
                           onChange={(e) => setAccount({ ...account,
                               firstName: e.target.value })}/>
                    <input placeholder={"Enter Last Name"} className="form-control mt-2" value={account.lastName}
                           onChange={(e) => setAccount({ ...account,
                               lastName: e.target.value })}/>
                    <input placeholder={"Enter Date of birth"} type="date" className="form-control mt-2" value={account.dob}
                           onChange={(e) => setAccount({ ...account,
                               dob: e.target.value })}/>
                    <input placeholder={"Enter Email address"} type="email" className="form-control mt-2" value={account.email}
                           onChange={(e) => setAccount({ ...account,
                               email: e.target.value })}/>
                    <select className="form-control mt-2"  placeholder={"Select Role"} onChange={(e) => setAccount({ ...account,
                        role: e.target.value })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button style={{borderRadius: 0}} className="btn btn-primary mt-2" onClick={save}>
                        Save
                    </button>
                    <button style={{borderRadius: 0, backgroundColor:"red"}} className="btn btn-danger ms-1 mt-2" onClick={signout}>
                        Signout
                    </button>
                    <Link to="../admin/users" className="btn btn-warning w-100 mt-2">
                        Users
                    </Link>
                </div>
            )}
            {!account && <div> <h1>Sign in or Sign up to view Account details</h1>
                <div className="flex-row">
            <button style={{borderRadius: 0, backgroundColor:"red"}} className="btn btn-primary me-3" onClick={() => navigate("/Kanbas/Signin")}> Signin </button>
                <button style={{borderRadius: 0, backgroundColor:"red"}} className="btn btn-primary" onClick={() => navigate("/Kanbas/Signup")}> Signup </button>
                </div>
            </div>}
        </div>
    );
}
export default Account;