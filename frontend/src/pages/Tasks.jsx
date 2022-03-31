import React from 'react';
import {Link} from "react-router-dom";


const ToDoItem = ({task}) => {
    return (
        <tr>
            <td>{task.project}</td>
            <td><Link to={`${task.title}`}>{task.title}</Link></td>
            <td>{task.body}</td>
            <td>{task.created_at}</td>
            <td>{task.updated_at}</td>
            <td>{task.user}</td>
            <td>{task.is_active}</td>
        </tr>
    )
}

const ToDoList = ({tasks}) => {

    return (
        <table>
            <thead>
            <tr>
                <th>Project</th>
                <th>Title</th>
                <th>Body</th>
                <th>Created at</th>
                <th>Updated at</th>
                <th>Creator</th>
                <th>It is done?</th>
            </tr>
            </thead>
            <tbody>
            {tasks.map((item) => <ToDoItem task={item}/>)}
            </tbody>
        </table>
    )
}

export {ToDoList};