import React from 'react';
import {Link} from "react-router-dom";

const ProjectItem = ({project}) => {
    return (
        <tr>
            <td><Link to={`${project.title}`}>{project.title}</Link></td>
            <td>{project.link}</td>
            <td>{project.users}</td>
        </tr>
    )
}

const ProjectsList = ({projects}) => {
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
            {projects.map((item) => <ProjectItem project={item}/>)}
            </tbody>
        </table>
    )
}

export {ProjectsList};
