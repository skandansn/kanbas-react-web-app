import React,  { useState } from "react";
import {useParams} from "react-router-dom";
import db from "../../Database";
import "../../index.css";
import {FaCheckCircle, FaEllipsisV, FaPlus} from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";
function ModuleList() {
    const {courseId} = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <div>
            <li className="list-group-item">
                <div className="row mb-3">
                    <div className="col-md-4">
                        <input
                            value={module.name}
                            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                            className="form-control"
                            placeholder="Module Name"
                        />
                    </div>
                    <div className="col-md-6">
            <textarea
                value={module.description}
                onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                className="form-control"
                placeholder="Module Description"
            />
                    </div>
                    <div className="col-md-2">
                        <button
                            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
                            className="btn btn-success"
                            style={{ borderRadius: '0px', width: '100%' }}
                        >
                            Add
                        </button>
                        <button
                            onClick={() => dispatch(updateModule(module))}
                            className="btn btn-primary mt-1"
                            style={{ borderRadius: '0px', width: '100%' }}
                        >
                            Update
                        </button>
                    </div>
                </div>
            </li>

            <div className="moduleItem">
            <ul className="list-group">
                {modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <div className="mb-3">
                            <li className="list-group-item list-group-item-light active p-2" aria-current="true">
                                <b>{module.name}</b>
                                <button
                                    className="btn btn-success ms-3"
                                    style={{borderRadius: '0px'}}
                                    onClick={() => dispatch(setModule(module))}>
                                    Edit
                                </button>

                                <button
                                    className={"btn btn-danger ms-1"}
                                    style={{borderRadius: '0px'}}
                                    onClick={() => dispatch(deleteModule(module._id))}>
                                    Delete
                                </button>

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
        </div>
    );
}

export default ModuleList;
