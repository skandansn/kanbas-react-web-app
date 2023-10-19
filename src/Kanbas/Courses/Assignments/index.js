import React from "react";
import {Link, useParams} from "react-router-dom";
import db from "../../Database";
import "../../index.css"
import {FaCheckCircle, FaEllipsisV, FaList, FaPlus} from "react-icons/fa";


function Assignments() {
    const {courseId} = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div style={{display: 'flex'}}>
            <div style={{flex: 3.5, margin: "5px"}}>
                <div className="">
                    <div className="d-inline-flex">
                        <input placeholder="Search for Assignment" className="form-control"/>
                    </div>
                    <div className="float-end">
                        <button className="btn btn-secondary ms-1" style={{borderRadius: 0}}>
                            <FaPlus className="me-1"/> Group
                        </button>
                        <button className="btn btn-danger ms-1" style={{borderRadius: 0}}>
                            <FaPlus/> Assignment
                        </button>
                        <button className="btn btn-secondary ms-1" style={{borderRadius: 0}}>
                            <FaList/>
                        </button>
                    </div>
                </div>
                <hr className="mt-4"/>
                <br></br>
                <div className="moduleItem">
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-light active p-2" aria-current="true">
                            <b>Assignments</b>
                            <div className="float-end m-1">
                                <FaCheckCircle color="green" style={{margin: '1px', padding: '1px'}}/>
                                <FaPlus style={{margin: '1px', padding: '1px'}}/>
                                <FaEllipsisV style={{margin: '1px', padding: '1px'}}/>
                            </div>
                        </li>
                        {courseAssignments.map((assignment) => (
                            <div>
                                <Link
                                    key={assignment._id}
                                    style={{borderLeft: "3px solid #5cb85c", borderRadius: 0}}
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                    className="list-group-item">
                                    {assignment.title}
                                    <br></br>
                                    <b>Due:</b> {assignment.due}
                                </Link>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Assignments;