import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const ASSIGNMENT_URL = `${API_BASE}/courses`;

export const updateAssignment = async (courseId, assignment) => {
    const response = await axios.
    put(`${ASSIGNMENT_URL}/${courseId}/assignments/${assignment._id}`, assignment);
    return response.data;
};

export const createAssignment = async (courseId, assignment) => {
    const response = await axios.post(
        `${ASSIGNMENT_URL}/${courseId}/assignments`,
        assignment
    );
    return response.data;
};

