import {Link} from "react-router-dom";
import db from "../Database";
import "../index.css";
import { useState } from "react";

const dashboardStyle = {
    flex: 1,
    margin: '10px',
};

const headingStyle = {
    display: 'flex',
};

const sectionTitleStyle = {
    marginLeft: '15px',
};

const courseCardStyle = {
    margin: '10px',
    width: '300px',
};

function Dashboard({ courses, course, setCourse, addNewCourse,
                       deleteCourse, updateCourse }
) {
    return (
        <div>
            <div style={dashboardStyle}>
                <div style={headingStyle}>
                    <div>
                        <div style={sectionTitleStyle}>
                            <h2>Dashboard</h2>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 style={sectionTitleStyle}>Published Courses ({courses.length})</h3>
                        <div className="mt-3" style={{ marginLeft: "15px" }}>
                            <h5>Add or edit a course</h5>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <input
                                        value={course.name}
                                        className="form-control"
                                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                                        placeholder="Course Name"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        value={course.number}
                                        className="form-control"
                                        onChange={(e) => setCourse({ ...course, number: e.target.value })}
                                        placeholder="Course Number"
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <input
                                        value={course.startDate}
                                        className="form-control"
                                        type="date"
                                        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
                                        placeholder="Start Date"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        value={course.endDate}
                                        className="form-control"
                                        type="date"
                                        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
                                        placeholder= "End Date"
                                    />
                                </div>
                            </div>
                            <button onClick={addNewCourse} className="btn btn-success" style={{ borderRadius: '0px' }}>
                                Add
                            </button>
                            <button onClick={updateCourse} className="btn btn-primary ms-1" style={{ borderRadius: '0px' }}>
                                Update
                            </button>
                        </div>



                        <hr/>
                    </div>
                    <br/>
                    <div className="d-flex flex-row flex-wrap">
                        {courses.map((course) => (
                            <div className="course-card card" style={courseCardStyle} key={course._id}>
                                <img src={require('./book.jpeg')} className="card-img-top" alt={course.name}/>
                                <div className="card-body">
                                    <h5 className="card-title">{course.name}</h5>
                                    <p className="card-text">Number: {course.number}</p>
                                    <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-secondary"
                                          style={{borderRadius: '0'}}>
                                        View Details
                                    </Link>
                                    <button
                                        onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course);
                                        }}
                                        style={{borderRadius: '0'}}
                                    className="btn btn-danger ms-1">
                                        Delete
                                    </button>
                                    <button
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}
                                    style={{borderRadius: '0'}}
                                        className="btn btn-warning ms-1"
                                    >
                                        Edit
                                    </button>


                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
