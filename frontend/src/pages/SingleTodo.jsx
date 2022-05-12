import React from 'react';
import {useParams} from "react-router-dom";
import {Table} from 'antd';
import {BackBtn} from "../components/Buttons";

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
]

const SingleToDo = ({todos}) => {
    const {title} = useParams()
    const filtered_items = todos.filter((item) => item.title === title)

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


// const ToDoItem = ({todo}) => {
//     return (
//         <tr>
//             <td>{todo.project}</td>
//             <td>{todo.title}</td>
//             <td>{todo.body}</td>
//             <td>{todo.created_at}</td>
//             <td>{todo.updated_at}</td>
//             <td>{todo.user}</td>
//             <td>{todo.is_active}</td>
//         </tr>
//     )
// }
//
// const SingleToDo = ({todos}) => {
//     const {title} = useParams();
//     const filtered_items = todos.filter((item) => item.title === title);
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
//             {filtered_items.map((item) => <ToDoItem todo={item}/>)}
//             </tbody>
//         </table>
//     )
// }

export {SingleToDo};