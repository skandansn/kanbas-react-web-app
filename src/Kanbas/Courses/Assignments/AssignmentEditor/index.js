import React from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import db from "../../../Database";
import "../../../index.css"
import { useSelector, useDispatch } from "react-redux";
import {addAssignment, setAssignment, updateAssignment} from "../assignmentReducer";
import {addModule, updateModule} from "../../Modules/modulesReducer";
import {createModule} from "../../Modules/client";
import * as client from "../../Assignments/client"
import {createAssignment} from "../../Assignments/client";

function AssignmentEditor() {
    const {assignmentId} = useParams();
    const assignment = useSelector((state) => state.assignmentReducer.assignment);
    const dispatch = useDispatch();
    const location = useLocation();
    const addOrEdit = location.pathname.includes("new") ? "Add" : "Edit";
    const {courseId} = useParams();
    const navigate = useNavigate();

    const handleUpdateAssignment =  () => {
        const status = client.updateAssignment(courseId, assignment);
        dispatch(updateAssignment(assignment));
    };

    const handleAddAssignment =  () => {
        createAssignment(courseId, assignment).then((assignment) => {
            dispatch(addAssignment(assignment));
        });
    };
    const handleSave = async () => {
        if (addOrEdit === "Add") {
            handleAddAssignment();
        }
        else {
            handleUpdateAssignment();
        }
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="mt-4">
            <b>Assignment Name</b>
            <input value={assignment.title}
                   className="form-control mb-2 mt-2"
                     onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))}
            />
            <b>Assignment Description</b>
            <textarea value={assignment.description}
                        className="form-control mb-2 mt-2"
                        onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value }))}
            />
                <b>Assignment Points</b>
                <input value={assignment.points}
                          className="form-control mb-2 mt-2"
                            onChange={(e) => dispatch(setAssignment({ ...assignment, points: e.target.value }))}
                />
                <b>Assignment Due Date</b>
                <input value={assignment.due}
                       type={"datetime-local"}
                          className="form-control mb-2 mt-2"
                            onChange={(e) => dispatch(setAssignment({ ...assignment, due: e.target.value }))}
                />

            <hr/>
            <div className="float-end">
                <Link style={{borderRadius: 0}} to={`/Kanbas/Courses/${courseId}/Assignments`}
                      className="btn btn-danger">
                    Cancel
                </Link>
                <button
                    onClick={handleSave}
                    style={{borderRadius: 0}} className="btn btn-success me-2 ms-2 ">
                    Save
                </button>
            </div>

        </div>
    );
}


export default AssignmentEditor;