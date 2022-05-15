import React from 'react';
import {useParams} from "react-router-dom";
import {Table} from 'antd';
import {BackBtn} from "../components/BackBtn";

const columns = [
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
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

const SingleUser = ({users}) => {
    const {username} = useParams();
    const filtered_items = users.filter((item) => item.username === username);

    return (
        <>
            <BackBtn/>
            <Table
                size="small"
                expandable={{
                    expandedRowRender: record => <p style={{margin: 0}}>ID: {record.uid}</p>,
                }}
                columns={columns}
                dataSource={filtered_items}
            />
        </>
    )
}


// const UserItem = ({user}) => {
//     return (
//         <tr>
//             <td>{user.uid}</td>
//             <td>{user.username}</td>
//             <td>{user.firstname}</td>
//             <td>{user.lastname}</td>
//             <td>{user.email}</td>
//         </tr>
//     )
// }
//
// const SingleUser = ({users}) => {
//     const {username} = useParams();
//     const filtered_items = users.filter((item) => item.username === username);
//     return (
//         <table>
//             <thead>
//             <tr>
//                 <th>ID</th>
//                 <th>Username</th>
//                 <th>Firstname</th>
//                 <th>Lastname</th>
//                 <th>Email</th>
//             </tr>
//             </thead>
//             <tbody>
//             {filtered_items.map((item) => <UserItem user={item}/>)}
//             </tbody>
//         </table>
//     )
// }

export {SingleUser};