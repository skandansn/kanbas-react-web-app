import KanbasNavigation from "./KanbasNavigation";
import {Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./index.css"
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "./users/signin";
import Account from "./Account";
import UserTable from "./Account/table";
import Signup from "./users/signup";

function Kanbas() {
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({
        name: "New Course",      number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = `${API_BASE}/courses`;

    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    const addNewCourse = async () => {
        const response = await axios.post(URL, course);

        setCourses([response.data,
            ...courses,]);
    };
    const deleteCourse = async (course) => {
        const response = await axios.delete(
            `${URL}/${course._id}`
        );
        setCourses(courses.filter(
            (c) => c._id !== course._id));
    };

    const updateCourse = async() => {
        const response = await axios.put(
            `${URL}/${course._id}`,
            course
        );

        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <Provider store={store}>
        <div className="d-flex">
            <KanbasNavigation/>
            <div className="flex-fill ms-3 me-3">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard"/>}/>
                    <Route path ="/signin" element={<Signin />}/>
                    <Route path ="/signup" element={<Signup />}/>
                    <Route path="/admin/users" element={<UserTable />} />
                    <Route path="Account" element={<Account />}/>
                    <Route path="/Account/:id" element={<Account />} />
                    <Route path="Dashboard" element={ <Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}/>}/>
                    <Route path="Index" element={<Navigate to="/"/>}/>
                    <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>}/>
                </Routes>
            </div>
        </div>
        </Provider>
    );
}

export default Kanbas;