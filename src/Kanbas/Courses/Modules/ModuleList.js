import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "../../index.css";
import { FaCheckCircle, FaPlus, FaEllipsisV, FaLink } from 'react-icons/fa';

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;

    return (
        <div className="moduleItem">
            <ul className="list-group">
                <li className="list-group-item list-group-item-light active p-2" aria-current="true">
                    <b>Week 0 - INTRO</b>
                    <div className="float-end m-1">
                        <FaCheckCircle color="green" style={{margin:'1px' ,padding:'1px'}}/>
                        <FaPlus style={{margin:'1px' , padding:'1px'}}/>
                        <FaEllipsisV style={{margin:'1px' ,padding:'1px'}}/>
                    </div>
                </li>
                <li className="list-group-item"><b>LEARNING OBJECTIVES</b>
                    <div className="float-end">
                        <FaCheckCircle style={{margin:'1px' , padding:'1px'}} color="green" />
                        <FaEllipsisV style={{margin:'1px' , padding:'1px'}} />
                    </div>
                </li>
                {modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item ps-5">
                            {module.name}
                            <div className="float-end">
                                <FaCheckCircle color="green" style={{margin:'1px' , padding:'1px'}} />
                                <FaEllipsisV style={{margin:'1px' , padding:'1px'}} />
                            </div>
                        </li>
                    ))
                }

            </ul>
        </div>
    );
}

export default ModuleList;
