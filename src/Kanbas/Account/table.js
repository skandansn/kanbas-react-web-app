import React, { useState, useEffect } from "react";
import * as client from "../users/client";
import { BsTrash3Fill, BsFillCheckCircleFill, BsPencil, BsPlusCircleFill }
    from "react-icons/bs";
import {Link} from "react-router-dom";
function UserTable() {
    const [users, setUsers] = useState([]);

    const [user, setUser] = useState({ username: "", password: "", role: "USER" });

    const deleteUser = async (user) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
            console.log(err);
        }
    };

    const selectUser = async (user) => {
        try {
            const u = await client.findUserById(user._id);
            setUser(u);
        } catch (err) {
            console.log(err);
        }
    };
    const updateUser = async () => {
        try {
            const status = await client.updateUser(user);
            setUsers(users.map((u) => (u._id === user._id ? user : u)));
        } catch (err) {
            console.log(err);
        }
    };

    const createUser = async () => {
        try {
            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
        } catch (err) {
            console.log(err);
        }
    };

    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => { fetchUsers(); }, []);
    return (
        <div>
            <h1>User List</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                <tr>
                    <td>
                        <input type="password" placeholder="Enter password" className="form-control" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
                        <input placeholder={"Enter Username"} className="form-control" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
                    </td>
                    <td>
                        <input placeholder={"Enter First Name"} className="form-control" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
                    </td>
                    <td>
                        <input placeholder={"Enter Last Name"} className="form-control" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
                    </td>
                    <td>
                        <select placeholder={"Select Role"} className="form-control" value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </td>
                    <td>
                        <BsFillCheckCircleFill onClick={updateUser}
                        className="me-2 text-success fs-1 text" />

                        <BsPlusCircleFill className="btn-primary h1" style={{color: "blue"}}  onClick={createUser}/>
                    </td>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user._id}>
                        <Link to={`/Kanbas/Account/${user._id}`}>
                        <td>{user.username}</td>
                        </Link>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <button className="btn btn-warning me-2">
                            <BsPencil onClick={() => selectUser(user)} />
                        </button>
                        <button onClick={() => deleteUser(user)}>
                            <BsTrash3Fill />
                        </button>
                    </tr>))}
                </tbody>
            </table>
        </div>
    );
}
export default UserTable;