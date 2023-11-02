import React from "react";
import {useParams} from "react-router-dom";
import db from "../../Database";
import "../../index.css";
import {FaCheckCircle, FaEllipsisV, FaPlus} from 'react-icons/fa';

function ModuleList() {
    const {courseId} = useParams();
    const modules = db.modules;

    return (
        <div className="moduleItem">
            <ul className="list-group">
                {modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <div className="mb-3">
                            <li className="list-group-item list-group-item-light active p-2" aria-current="true">
                                <b>{module.name}</b>
                                <div className="float-end m-1">
                                    <FaCheckCircle color="green" style={{margin: '1px', padding: '1px'}}/>
                                    <FaPlus style={{margin: '1px', padding: '1px'}}/>
                                    <FaEllipsisV style={{margin: '1px', padding: '1px'}}/>
                                </div>
                            </li>
                            <li key={index} className="list-group-item ps-5">
                                {module.description}
                                <div className="float-end">
                                    <FaCheckCircle color="green" style={{margin: '1px', padding: '1px'}}/>
                                    <FaEllipsisV style={{margin: '1px', padding: '1px'}}/>
                                </div>
                            </li>
                        </div>
                    ))
                }

            </ul>
        </div>
    );
}

export default ModuleList;
