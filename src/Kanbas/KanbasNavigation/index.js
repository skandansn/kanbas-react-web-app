import {Link, useLocation} from "react-router-dom";
import "../index.css";
import {
  FaBook,
  FaChartBar,
  FaHistory,
  FaHome,
  FaInbox,
  FaQuestionCircle,
  FaUniversity,
  FaUser,
  FaVideo,
} from "react-icons/fa";

const sidebarStyle = {
    backgroundColor: 'black',
    height: '100vh',
    width: '85px',
    display: 'none', // You can control this dynamically using state or props
    textAlign: 'center',
    borderRadius: '0px',
    justifyContent: 'center'
};

const iconMap = {
    Index: FaHome,
    Account: FaUser,
    Dashboard: FaChartBar,
    Courses: FaBook,
    Inbox: FaInbox,
    History: FaHistory,
    Studio: FaVideo,
    Commons: FaUniversity,
    Help: FaQuestionCircle,
};

function KanbasNavigation() {
    const links = ["Index", "Account", "Dashboard", "Courses", "Inbox", "History", "Studio", "Commons", "Help"];
    const {pathname} = useLocation();

    return (
        <div id="sidebar" className="list-group bg-black vh-100 d-none d-sm-block" style={sidebarStyle}>
            {links.map((link, index) => {
                const Icon = iconMap[link]; // Get the corresponding icon component

                return (
                    <Link
                        key={index}
                        to={`/Kanbas/${link}`}
                        style={{
                            backgroundColor: pathname.includes(link) ? 'white' : 'black',
                            color: pathname.includes(link) ? 'red' : 'white',
                            marginTop: "7px",
                            fontSize: "14px",
                            padding: "12px",
                            justifyContent: "center",
                        }}
                        className={`list-group-item border-0`}
                    >
                        <Icon size={20} style={{
                            marginRight: '10px',
                            color: link === "Account" ? "gray" : "red"
                        }}/> <span style={{justifyContent: "center"}}> {link}</span>
                    </Link>
                );
            })}
        </div>
    );
}

export default KanbasNavigation;
