import { Link } from "react-router-dom";
import db from "../Database";
import "../index.css";

const dashboardStyle = {
    marginLeft: '30px',
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
    border: '1px solid #000',
    margin: '10px',
    width: '300px',
    padding: '10px',
};

function Dashboard() {
    const courses = db.courses;

    return (
        <div>
            <div style={dashboardStyle}>
                <div style={headingStyle}>
                    <div>
                        <div style={sectionTitleStyle}>
                            <h2>Dashboard</h2>
                        </div>
                        <hr />
                    </div>
                </div>
                <div>
                    <div>
                        <h3 style={sectionTitleStyle}>Published Courses ({courses.length})</h3>
                        <hr />
                    </div>
                    <br />
                    <div className="d-flex flex-row flex-wrap">
                        {courses.map((course) => (
                            <div className="course-card card" style={courseCardStyle} key={course._id}>
                                <img src={require('./book.jpeg')} className="card-img-top" alt={course.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{course.name}</h5>
                                    <p className="card-text">Number: {course.number}</p>
                                    <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-danger" style={{ borderRadius: '0' }}>
                                        View Details
                                    </Link>
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
