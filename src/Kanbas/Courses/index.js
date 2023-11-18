import {Navigate, Route, Routes, useLocation, useParams} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import {FaBars} from "react-icons/fa";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "../index.css"
import { useState, useEffect } from "react";
import axios from "axios";

function Courses({ courses }) {
    const {pathname} = useLocation();
    const pathParts = pathname.split("/");

    // Get the last part of the URL path (excluding any potential trailing slash)
    const lastPathPart = pathParts[pathParts.length - 1] || "Home";
    const {courseId} = useParams();

    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = `${API_BASE}/courses`;
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };

    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);


    return (
        <div className="flex-column">
            <div className="w-100 ">
                <div style={{display: "flex", flexDirection: "row"}}>
                    <FaBars className="m-lg-3 mt-3 text-danger" style={{fontSize: "large"}}/>
                    <nav style={{"--bs-breadcrumb-divider": "'>'"}} className="mt-3" aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#" className="text-danger text-decoration-none">{course._id}</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">{lastPathPart}</li>
                        </ol>
                    </nav>
                </div>
                <hr/>
            </div>
            <div className="d-flex flex-row ">
                <div style={{flex: 0.5}}>
                    <CourseNavigation/>
                </div>
                <div style={{flex: 4}}>
                    <div>
                        <br/>
                        <Routes>
                            <Route path="/" element={<Navigate to="Home"/>}/>
                            <Route path="Home" element={<Home/>}/>
                            <Route path="Modules" element={<Modules/>}/>
                            <Route path="Assignments" element={<Assignments/>}/>
                            <Route path="Assignments/:assignmentId"
                                   element={<AssignmentEditor/>}/>
                            <Route path="Grades" element={<Grades/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Courses;