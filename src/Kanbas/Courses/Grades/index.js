import React from "react";
import {FaFileExport, FaFileImport, FaFilter} from "react-icons/fa";
import db from "../../Database";
import {useParams} from "react-router-dom";
import "../../index.css";
import {FaGears} from "react-icons/fa6";

function Grades() {
    const {courseId} = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

    return (
        <div className="d-flex flex-row" style={{flex: 1}}>
            <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                <div>
                    <div className="">
                        <div className="float-end">
                            <button className="btn btn-secondary ms-1" style={{borderRadius: 0}}>
                                <FaFileImport className="me-1"/> Import
                            </button>
                            <button className="btn btn-secondary ms-1" style={{borderRadius: 0}}>
                                <FaFileExport className="me-1"/> Export
                            </button>
                            <button className="btn btn-secondary ms-1" style={{borderRadius: 0}}>
                                <FaGears/>
                            </button>
                        </div>
                    </div>

                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div className="moduleItem">
                        <div className="container">
                            <div className="row">
                                <div className="col"><b>Student Names</b></div>
                                <div className="col"><b>Assignment Names</b></div>
                                <div className="w-100"></div>
                                <input className="m-1 p-1 col form-control" type="text" placeholder="Search Students"/>
                                <input className="m-1 p-1 col form-control" type="text"
                                       placeholder="Search Assignments"/>
                            </div>
                            <div className="d-inline">
                                <button style={{borderRadius: 0}} className="btn btn-secondary ms-0 mt-1">
                                    <FaFilter/> Apply Filters
                                </button>
                            </div>
                        </div>
                        <br/>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">Student Name</th>
                                    {assignments.map((assignment) => (
                                        <th scope="col" key={assignment._id}>
                                            {assignment.title} (out of 100)
                                        </th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                {enrollments.map((enrollment) => {
                                    const user = db.users.find((user) => user._id === enrollment.user);
                                    return (
                                        <tr key={user._id}>
                                            <td>
                                                <a href="#"
                                                   className="text-decoration-none text-danger">{user.firstName} {user.lastName}</a>
                                            </td>
                                            {assignments.map((assignment) => {
                                                const grade = db.grades.find(
                                                    (grade) =>
                                                        grade.student === enrollment.user && grade.assignment === assignment._id
                                                );
                                                return (
                                                    <td key={assignment._id}>
                                                        {grade ? (
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                value={grade.grade}
                                                            />
                                                        ) : null}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Grades;
