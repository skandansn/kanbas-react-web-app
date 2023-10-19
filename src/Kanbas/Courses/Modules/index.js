import ModuleList from "./ModuleList";
import "../../index.css";
import {useState} from "react";
import {FaCheckCircle, FaList, FaPlus} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function Modules() {
    const [selectedOption, setSelectedOption] = useState('Option 1');

    const handleOptionChange = (event) => {
    };

    return (
        <div style={{display: 'flex'}}>
            <div style={{flex: 3.5, margin: "5px"}}>
                <div className="">
                    <div className="float-end">
                        <button style={{borderRadius: 0}} className="btn btn-secondary ms-1">
                            Collapse All
                        </button>
                        <button style={{borderRadius: 0}} className="btn btn-secondary ms-1">
                            View Progress
                        </button>
                        <div className="dropdown ms-1 d-inline">
                            <button
                                style={{borderRadius: 0}}
                                className="btn btn-secondary dropdown-toggle"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <FaCheckCircle style={{color: 'green'}}/> Publish All
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li>
                                    <button className="dropdown-item" onClick={() => handleOptionChange('Option 1')}>
                                        Option 1
                                    </button>
                                </li>
                                <li>
                                    <button className="dropdown-item" onClick={() => handleOptionChange('Option 2')}>
                                        Option 2
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <button style={{borderRadius: 0}} className="btn btn-danger ms-1">
                            <FaPlus/> Module
                        </button>
                        <button style={{borderRadius: 0}} className="btn btn-secondary ms-1">
                            <FaList/>
                        </button>
                    </div>
                </div>
                <br></br>
                <hr className="mt-4"/>
                <br></br>
                <ModuleList/>
            </div>

        </div>
    );
}

export default Modules;
