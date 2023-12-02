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
            <h1>Account</h1>
            {account && (
                <div>
                    <input className="form-control" value={account.password}
                           onChange={(e) => setAccount({ ...account,
                               password: e.target.value })}/>
                    <input className="form-control" value={account.firstName}
                           onChange={(e) => setAccount({ ...account,
                               firstName: e.target.value })}/>
                    <input className="form-control" value={account.lastName}
                           onChange={(e) => setAccount({ ...account,
                               lastName: e.target.value })}/>
                    <input className="form-control" value={account.dob}
                           onChange={(e) => setAccount({ ...account,
                               dob: e.target.value })}/>
                    <input className="form-control" value={account.email}
                           onChange={(e) => setAccount({ ...account,
                               email: e.target.value })}/>
                    <select className="form-control"  onChange={(e) => setAccount({ ...account,
                        role: e.target.value })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button className="btn btn-primary" onClick={save}>
                        Save
                    </button>
                    <button className="btn btn-danger" onClick={signout}>
                        Signout
                    </button>
                    <Link to="../admin/users" className="btn btn-warning w-100">
                        Users
                    </Link>
                </div>
            )}
            {!account && <div> <h1>Sign in or Sign up to view details</h1>
            <button className="btn btn-primary" onClick={() => navigate("/Kanbas/Signin")}> Signin </button>
                <button className="btn btn-primary" onClick={() => navigate("/Kanbas/Signup")}> Signup </button>
            </div>}
        </div>
    );
}
export default Account;