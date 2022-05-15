import React from 'react';
import {useParams} from "react-router-dom";

const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>{project.title}</td>
            <td>{project.link}</td>
            <td>{project.users}</td>
        </tr>
    )
}

const SingleProject = ({projects}) => {
    const {title} = useParams();
    const filtered_items = projects.filter((item) => item.title === title);
    return (
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Link</th>
                <th>Users</th>
            </tr>
            </thead>
            <tbody>
            {filtered_items.map((item) => <ProjectItem project={item}/>)}
            </tbody>
        </table>
    )
}

export {SingleProject};