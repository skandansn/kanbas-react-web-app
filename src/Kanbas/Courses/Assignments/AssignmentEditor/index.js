import React from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import db from "../../../Database";
import "../../../index.css"

function AssignmentEditor() {
    const {assignmentId} = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const {courseId} = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="mt-4">
            <b>Assignment Name</b>
            <input value={assignment.title}
                   className="form-control mb-2 mt-2"/>
            <hr/>
            <div className="float-end">
                <Link style={{borderRadius: 0}} to={`/Kanbas/Courses/${courseId}/Assignments`}
                      className="btn btn-danger">
                    Cancel
                </Link>
                <button style={{borderRadius: 0}} onClick={handleSave} className="btn btn-success me-2 ms-2 ">
                    Save
                </button>
            </div>

        </div>
    );
}


export default AssignmentEditor;