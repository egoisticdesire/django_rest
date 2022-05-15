import React from 'react';
import {useParams} from "react-router-dom";


const ToDoItem = ({task}) => {
    return (
        <tr>
            <td>{task.project}</td>
            <td>{task.title}</td>
            <td>{task.body}</td>
            <td>{task.created_at}</td>
            <td>{task.updated_at}</td>
            <td>{task.user}</td>
            <td>{task.is_active}</td>
        </tr>
    )
}

const SingleToDo = ({tasks}) => {
    const {title} = useParams();
    const filtered_items = tasks.filter((item) => item.title === title);
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
            {filtered_items.map((item) => <ToDoItem task={item}/>)}
            </tbody>
        </table>
    )
}

export {SingleToDo};