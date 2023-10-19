import ModuleList from "./ModuleList";
import "../../index.css";
import {useState} from "react";
import {FaCheckCircle, FaList, FaPlus} from "react-icons/fa";

function FaListDots() {
    return null;
}

function Modules() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 3.5, margin:"5px" }}>
                <div className="m-3">
                    <div className="float-end">
                        <button style={{ borderRadius: 0 }} className="btn btn-secondary">Collapse All</button>
                        <button style={{ borderRadius: 0 }} className="btn btn-secondary">View Progress</button>
                        <div className="dropdown d-inline">
                            <button
                                style={{ borderRadius: 0 }}
                                className="btn btn-secondary dropdown-toggle"
                                onClick={toggleDropdown}
                            >
                                <FaCheckCircle style={{ color: 'green' }} /> Publish All
                            </button>
                            {isDropdownOpen && (
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            )}
                        </div>
                        <button style={{ borderRadius: 0 }} className="btn btn-danger"><FaPlus /> Module</button>
                        <button style={{ borderRadius: 0 }} className="btn btn-secondary" ><FaList /> </button>
                    </div>
                </div>
                <br></br>
                <br></br>
                <hr />
                <br></br>
                <ModuleList />
            </div>

        </div>
    );
}

export default Modules;
