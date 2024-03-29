import React from "react";
import {Link, useParams} from "react-router-dom";
import db from "../../Database";
import "../../index.css"
import {FaCheckCircle, FaEllipsisV, FaList, FaPlus} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {deleteAssignment, setAssignment, updateAssignment} from "./assignmentReducer";


function Assignments() {
    const {courseId} = useParams();
    const assignments = useSelector((state) => state.assignmentReducer.assignments);
    const assignment = useSelector((state) => state.assignmentReducer.assignment);
    const dispatch = useDispatch();
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);

    const handleDelete = (id) => {
        const confirmation = window.confirm("Are you sure you want to delete this assignment?");

        if(confirmation) {
            dispatch(deleteAssignment(id));
        }
    }
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
                        <Link className="btn btn-danger ms-1" style={{borderRadius: 0}}
                              to={{
                                  pathname: `/Kanbas/Courses/${courseId}/Assignments/new`,
                              }}                        >
                            <FaPlus/> Assignment
                        </Link>
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
                            <div style={{ borderLeft: "3px solid #5cb85c", borderRadius: 0, display: "flex",marginTop:"5px", marginBottom:"5px" }}>
                                <Link
                                    key={assignment._id}
                                    to={{
                                        pathname: `/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`,
                                    }}                                    className="list-group-item d-flex justify-content-between align-items-center"
                                    style={{  flex:5 }}
                                    onClick={() => dispatch(setAssignment(assignment))}
                                >
                                    <div>
                                        {assignment.title}<br></br>
                                        {assignment.description}<br></br>
                                        <b>Total points:</b> {assignment.points}<br></br>
                                        <b>Due:</b> {assignment.due}
                                    </div>
                                </Link>
                                <button
                                    onClick={() => handleDelete(assignment._id)}
                                    className="btn btn-danger btn-sm" // Add btn-sm class for smaller button
                                    style={{ borderRadius: 0, flex:1 }}
                                >
                                    Delete
                                </button>
                            </div>

                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Assignments;