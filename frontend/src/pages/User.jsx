import React from 'react';
import {Link} from "react-router-dom";

const UserItem = ({user}) => {
    return (
        <tr>
            <td><Link to={`${user.username}`}>{user.username}</Link></td>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
        </tr>
    )
}

const UsersList = ({users}) => {

    return (
        <table>
            <thead>
            <tr>
                <th>Username</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {users.map((item) => <UserItem user={item}/>)}
            </tbody>
        </table>
    )
}

export {UsersList};