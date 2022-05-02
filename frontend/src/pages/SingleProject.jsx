import React from 'react';
import {useParams} from "react-router-dom";
import {Table} from "antd";
import {BackBtn} from "../components/Buttons";

const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Link',
        dataIndex: 'link',
        key: 'link',
    },
]

const SingleProject = ({projects}) => {
    const {title} = useParams();
    const filtered_items = projects.filter((item) => item.title === title);

    return (
        <>
            <BackBtn/>
            <Table
                size="small"
                expandable={{
                    expandedRowRender: record => <p style={{margin: 0}}>Users: {record.users}</p>,
                }}
                columns={columns}
                dataSource={filtered_items}
            />
        </>
    )
}


// const ProjectItem = ({project}) => {
//     return (
//         <tr>
//             <td>{project.title}</td>
//             <td>{project.link}</td>
//             <td>{project.users}</td>
//         </tr>
//     )
// }
//
// const SingleProject = ({projects}) => {
//     const {title} = useParams();
//     const filtered_items = projects.filter((item) => item.title === title);
//     return (
//         <table>
//             <thead>
//             <tr>
//                 <th>Title</th>
//                 <th>Link</th>
//                 <th>Users</th>
//             </tr>
//             </thead>
//             <tbody>
//             {filtered_items.map((item) => <ProjectItem project={item}/>)}
//             </tbody>
//         </table>
//     )
// }

export {SingleProject};