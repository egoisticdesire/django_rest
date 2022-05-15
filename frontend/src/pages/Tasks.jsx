import React from 'react';
import {Link} from "react-router-dom";
import {Table} from 'antd';
import {BackBtn} from "../components/BackBtn";

const ToDoList = ({tasks}) => {
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (title) => <Link to={`${title}`}>{title}</Link>,
        },
        {
            title: 'Created_at',
            dataIndex: 'created_at',
            key: 'created_at',
        },
        {
            title: 'Updated_at',
            dataIndex: 'updated_at',
            key: 'updated_at',
        },
        {
            title: 'Done?',
            dataIndex: 'is_active',
            key: 'is_active',
        },
    ]

    return (
        <>
            <BackBtn/>
            <Table
                size="small"
                columns={columns}
                dataSource={tasks}
            />
        </>
    )

}

// const ToDoItem = ({task}) => {
//     return (
//         <tr>
//             <td>{task.project}</td>
//             <td><Link to={`${task.title}`}>{task.title}</Link></td>
//             <td>{task.body}</td>
//             <td>{task.created_at}</td>
//             <td>{task.updated_at}</td>
//             <td>{task.user}</td>
//             <td>{task.is_active}</td>
//         </tr>
//     )
// }
//
// const ToDoList = ({tasks}) => {
//
//     return (
//         <table>
//             <thead>
//             <tr>
//                 <th>Project</th>
//                 <th>Title</th>
//                 <th>Body</th>
//                 <th>Created at</th>
//                 <th>Updated at</th>
//                 <th>Creator</th>
//                 <th>It is done?</th>
//             </tr>
//             </thead>
//             <tbody>
//             {tasks.map((item) => <ToDoItem task={item}/>)}
//             </tbody>
//         </table>
//     )
// }

export {ToDoList};