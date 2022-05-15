import React from 'react';
import {useParams} from "react-router-dom";

const UserItem = ({user}) => {
    return (
        <tr>
            <td>{user.uid}</td>
            <td>{user.username}</td>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
        </tr>
    )
}

const SingleUser = ({users}) => {
    const {username} = useParams();
    const filtered_items = users.filter((item) => item.username === username);
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {filtered_items.map((item) => <UserItem user={item}/>)}
            </tbody>
        </table>
    )
}

export {SingleUser};