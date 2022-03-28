import React from 'react'

const UserItem = ({ user }) => {
    return (
        <tr>
            <td>
                <span>{user.username}</span>
            </td>
            <td>
                <span>{user.firstname}</span>
            </td>
            <td>
                <span>{user.lastname}</span>
            </td>
            <td>
                <span>{user.email}</span>
            </td>
        </tr>
    )
}

const UserList = ({ users }) => {
    return (
        <table class='users__table'>
            <th>Username</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            {users.map((user) => <UserItem user={user} />)}
        </table>
    )
}

export default UserList;