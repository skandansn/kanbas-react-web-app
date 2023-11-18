import React, {useState, useEffect} from "react";
import axios from "axios";

function WorkingWithArrays() {
    const [errorMessage, setErrorMessage] = useState(null);

    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    const [todos, setTodos] = useState([]);

    const postTodo = async () => {
        setErrorMessage(null)
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };

    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    const removeTodo = async (todo) => {
        const response = await axios
            .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };

    const fetchTodoById = async (id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };


    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };

    const deleteTodo = async (todo) => {
        try {
            setErrorMessage(null)
            const response = await axios.delete(`${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    const updateTodo = async () => {
        try {
            setErrorMessage(null)
            const response = await axios.put(
                `${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (
                t.id === todo.id ? todo : t)));
            setTodo({});
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }

    };

    const updateTitle = async () => {
        const response = await axios.get(
            `${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };    const updateDescription = async () => {
        const response = await axios.get(
            `${API}/${todo.id}/description/${todo.description}`);
        setTodos(response.data);
    };    const updateCompleted = async () => {
        const response = await axios.get(
            `${API}/${todo.id}/completed/${todo.completed}`);
        setTodos(response.data);
    };




    useEffect(() => {
        fetchTodos();
    }, []);


    const API = "http://localhost:4000/a5/todos";
    return (
        <div>
            <h3>Working with Arrays</h3>
            <h4>With axios get put delete and error handling</h4>
            {errorMessage && (
                <div className="alert alert-danger mb-2 mt-2">
                    {errorMessage}
                </div>
            )}
            <input
                value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value })}
                className="form-control mb-2"
                type="text"
            />
            <textarea
                onChange={(e) => setTodo({ ...todo,
                    description: e.target.value })}
                value={todo.description} type="text"
            />
            <input
                onChange={(e) => setTodo({
                    ...todo, due: e.target.value })}
                value={todo.due} type="date"
            />
            <label>
                <input
                    onChange={(e) => setTodo({
                        ...todo, completed: e.target.checked })}
                    value={todo.completed} type="checkbox"
                />
                Completed
            </label>
            <button onClick={postTodo} >
                Post Todo
            </button>
            <button onClick={updateTodo}>
                Update Todo
            </button>
            <ul className="list-group">
                {todos.map((todo) => (
                    <li key={todo.id}
                        className="list-group-item">
                        <button
                            onClick={() => fetchTodoById(todo.id)}
                            className="btn btn-warning me-2 float-end" >
                            Edit
                        </button>
                        <button
                            onClick={() => removeTodo(todo)}
                            className="btn btn-danger float-end" >
                            Remove
                        </button>
                        <button
                            onClick={() => deleteTodo(todo)}
                            className="btn btn-danger float-end ms-2">
                            Delete via axios delete method and error handling
                        </button>
                        <input
                            checked={todo.completed}
                            type="checkbox" readOnly
                        />
                        {todo.title}
                        <p>{todo.description}</p>
                        <p>{todo.due}</p>
                    </li>
                ))}
            </ul>
            <br/>
            <br/>
            <br/>
            <br/>
            <h3> without axios put delete and without error handling</h3>
            Selected Todo: {todo.id}
            {/*<input*/}
            {/*    value={todo.id}*/}
            {/*    onChange={(e) => setTodo({*/}
            {/*        ...todo, id: e.target.value })}*/}
            {/*    className="form-control mb-2"*/}
            {/*    type="number"*/}
            {/*/>*/}
            <input
                value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value })}
                className="form-control mb-2"
                type="text"
            />
            <input
                value={todo.description}
                onChange={(e) => setTodo({
                    ...todo, description: e.target.value })}
                className="form-control mb-2"
                type="text"
            />            <input
                value={todo.completed}
                onChange={(e) => setTodo({
                    ...todo, completed: e.target.value })}
                className="form-control mb-2"
                type="text"
            />
            <button onClick={createTodo}
                    className="btn btn-primary mb-2 w-100">
                Create Todo
            </button>
            <button onClick={updateTitle}
                    className="btn btn-success mb-2 w-100">
                Update Title
            </button>
            <button onClick={updateDescription}
                    className="btn btn-success mb-2 w-100">
                Update Description
            </button>           <button onClick={updateCompleted}
                    className="btn btn-success mb-2 w-100">
                Update Completed
            </button>


            <br/>
            <h3>Deleting from an Array</h3>
            <a href={`${API}/${todo.id}/delete`}
               className="btn btn-primary me-2">
                Delete Todo with ID = {todo.id}
            </a>

            <br></br>
            <br></br>
            <input
                value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value })}
                className="form-control mb-2"
                type="text"
            />
            <h3>Updating an Item Title in an Array</h3>
            <a
                href={`${API}/${todo.id}/title/${todo.title}`}
                className="btn btn-primary me-2" >
                Update Title to {todo.title}
            </a>

            <br></br>
            <br></br>

            <input
                value={todo.completed}
                onChange={(e) => setTodo({
                    ...todo, completed: e.target.value })}
                className="form-control mb-2"
                type="text"
            />
            <h3>Updating an Item Completed in an Array</h3>
            <a
                href={`${API}/${todo.id}/completed/${todo.completed}`}
                className="btn btn-primary me-2" >
                Update Completed to {todo.completed}
            </a>

            <br></br>
            <br></br>
            <input
                value={todo.description}
                onChange={(e) => setTodo({
                    ...todo, description: e.target.value })}
                className="form-control mb-2"
                type="text"
            />
            <h3>Updating an Item Description in an Array</h3>
            <a
                href={`${API}/${todo.id}/description/${todo.description}`}
                className="btn btn-primary me-2" >
                Update Description to {todo.description}
            </a>

            <br></br>
            <br></br>
            <h4>Retrieving Arrays</h4>
            <a href={API} className="btn btn-primary me-2">
                Get Todos
            </a>

            <br></br>
            <br></br>
            <h4>Retrieving an Item from an Array by ID</h4>
            <input
                className="form-control"
                value={todo.id}
                onChange={(e) => setTodo({ ...todo,
                    id: e.target.value })}/>
            <a href={`${API}/${todo.id}`}
               className="btn btn-primary me-2">
                Get Todo by ID
            </a>

            <br></br>
            <br></br>
            <h3>Filtering Array Items</h3>
            <a href={`${API}?completed=true`}
               className="btn btn-primary me-2" >
                Get Completed Todos
            </a>

            <br></br>
            <br></br>
            <h4>Creating new Items in an Array</h4>
            <a href={`${API}/create`}
               className="btn btn-primary me-2">
                Create Todo
            </a>



        </div>
    );
}
export default WorkingWithArrays;