import React from 'react';
import {useParams} from "react-router-dom";
import {Table} from 'antd';
import {BackBtn} from "../components/BackBtn";

const columns = [
    {
        title: 'Project',
        dataIndex: 'project',
        key: 'project',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
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
        title: 'User',
        dataIndex: 'user',
        key: 'user',
    },
    {
        title: 'Done?',
        dataIndex: 'is_active',
        key: 'is_active',
    },
]

const SingleToDo = ({tasks}) => {
    const {title} = useParams()
    const filtered_items = tasks.filter((item) => item.title === title)

    return (
        <>
            <BackBtn/>
            <Table
                size="small"
                expandable={{
                    expandedRowRender: record => <p style={{margin: 0}}>{record.body}</p>,
                }}
                columns={columns}
                dataSource={filtered_items}
            />
        </>
    )
}


// const ToDoItem = ({task}) => {
//     return (
//         <tr>
//             <td>{task.project}</td>
//             <td>{task.title}</td>
//             <td>{task.body}</td>
//             <td>{task.created_at}</td>
//             <td>{task.updated_at}</td>
//             <td>{task.user}</td>
//             <td>{task.is_active}</td>
//         </tr>
//     )
// }
//
// const SingleToDo = ({tasks}) => {
//     const {title} = useParams();
//     const filtered_items = tasks.filter((item) => item.title === title);
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
//             {filtered_items.map((item) => <ToDoItem task={item}/>)}
//             </tbody>
//         </table>
//     )
// }

export {SingleToDo};