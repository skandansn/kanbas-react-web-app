import React from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import "../../index.css"

function CourseNavigation() {
    const links = [
        "Home",
        "Modules",
        "Piazza",
        "Zoom Meetings",
        "Assignments",
        "Quizzes",
        "Grades",
        "People",
        "Panopto Video",
        "Discussions",
        "Announcements",
        "Pages",
        "Files",
        "Rubrics",
        "Outcomes",
        "Collaboration",
        "Syllabus",
        "Settings"
    ];

    const {courseId} = useParams();
    const {pathname} = useLocation();

    return (
        <div id="sideBar2" className="d-none d-sm-block ms-3" style={{width: '200px'}}>
            {links.map((link, index) => (
                <div
                    key={index}
                    style={{
                        margin: "7px",
                        padding: "7px",
                        borderLeft: pathname.includes(link) ? "2px solid black" : "none"
                    }}
                >
                    <Link
                        to={`/Kanbas/Courses/${courseId}/${link}`}
                        className={pathname.includes(link) ? "text-black" : "text-danger"}
                    >
                        {link}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default CourseNavigation;
