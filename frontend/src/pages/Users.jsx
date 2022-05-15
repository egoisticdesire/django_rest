import React from 'react';
import {Link} from "react-router-dom";
import {Table} from 'antd';
import {BackBtn} from "../components/BackBtn";

const UsersList = ({users}) => {
    const columns = [
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
            render: (username) => <Link to={`${username}`}>{username}</Link>,
        },
        {
            title: 'Firstname',
            dataIndex: 'firstname',
            key: 'firstname',
        },
        {
            title: 'Lastname',
            dataIndex: 'lastname',
            key: 'lastname',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
    ]

    return (
        <>
            <BackBtn/>
            <Table
                size="small"
                columns={columns}
                dataSource={users}
            />
        </>
    )
}

// const UserItem = ({user}) => {
//     return (
//         <tr>
//             <td><Link to={`${user.username}`}>{user.username}</Link></td>
//             <td>{user.firstname}</td>
//             <td>{user.lastname}</td>
//             <td>{user.email}</td>
//         </tr>
//     )
// }
//
// const UsersList = ({users}) => {
//
//     return (
//         <table>
//             <thead>
//             <tr>
//                 <th>Username</th>
//                 <th>Firstname</th>
//                 <th>Lastname</th>
//                 <th>Email</th>
//             </tr>
//             </thead>
//             <tbody>
//             {users.map((item) => <UserItem user={item}/>)}
//             </tbody>
//         </table>
//     )
// }

export {UsersList};