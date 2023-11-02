import Modules from "../Modules";
import {
    FaBan,
    FaBell,
    FaBook,
    FaCalendarAlt,
    FaChartBar,
    FaCheckCircle,
    FaCircle,
    FaCrosshairs,
    FaFileImport,
    FaSpeakerDeck
} from "react-icons/fa";
import "../../index.css"

function Home() {
    return (
        <div style={{display: "flex"}}>
            <div style={{flex: 2.0}}>
                <Modules/>
            </div>
            <div style={{flex: 0.5}}>
                <div>
                    <div className="ms-4 d-none d-lg-block">
                        <h6>Course Status</h6>
                        <button style={{borderRadius: 0}} className="btn btn-secondary"><FaBan/> Unpublish</button>
                        <button style={{borderRadius: 0}} className="btn btn-success ms-1"><FaCheckCircle/> Published
                        </button>
                        <br/>
                        <br/>
                        <button style={{borderRadius: 0}} className="btn btn-secondary"><FaFileImport
                            className="me-2"/> Import Existing Content
                        </button>
                        <br/>
                        <button style={{borderRadius: 0, marginTop: '5px'}} className="btn btn-secondary"><FaFileImport
                            className="me-2"/> Import from Commons
                        </button>
                        <br/>
                        <button style={{borderRadius: 0, marginTop: '5px'}} className="btn btn-secondary"><FaCrosshairs
                            className="me-2"/> Choose Home Page
                        </button>
                        <br/>
                        <button style={{borderRadius: 0, marginTop: '5px'}} className="btn btn-secondary"><FaBook
                            className="me-2"/> View Course Stream
                        </button>
                        <br/>
                        <button style={{borderRadius: 0, marginTop: '5px'}} className="btn btn-secondary"><FaSpeakerDeck
                            className="me-2"/> New Announcements
                        </button>
                        <br/>
                        <button style={{borderRadius: 0, marginTop: '5px'}} className="btn btn-secondary"><FaChartBar
                            className="me-2"/> New Analytics
                        </button>
                        <br/>
                        <button style={{borderRadius: 0, marginTop: '5px'}} className="btn btn-secondary"><FaBell
                            className="me-2"/> View Course Notifications
                        </button>
                        <br/>
                        <br/>
                        <b>To Do</b>
                        <hr/>
                        <div>
                            <a href="#" className="text-decoration-none text-danger"><i
                                className="fa-solid fa-1 fa-xs"/> Grade A1 - ENV + HTML</a>
                            <br/>
                            <p>100 points <FaCircle className="fa-2xs"/> Sep 18 at 11:59pm</p>
                        </div>
                        <br/>
                        <div>
                            <b>Coming Up</b>
                            <div className="float-end">
                                <a className="me-3 text-decoration-none text-danger"><FaCalendarAlt/> View Calendar</a>
                            </div>
                        </div>
                        <hr/>
                        <div>
                            <a href="#" className="text-decoration-none text-danger"><FaCalendarAlt
                                style={{color: 'red'}}/> Lecture</a>
                            <br/>
                            <p>Sep 18 at 11:59pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;