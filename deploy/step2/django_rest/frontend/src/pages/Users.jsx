import React from 'react';
import {Link} from "react-router-dom";
import {Table} from 'antd';
import {BackBtn} from "../components/Buttons";
import {motion, AnimatePresence} from 'framer-motion'

const UsersList = ({users}) => {
    users.map((item) => item.key = item.uid);

    const positionPagination = {
        top: 'topRight',
        bottom: 'bottomRight',
    }
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

    const variants = {
        visible: {
            opacity: 1,
            y: 0,
        },
        hidden: {
            opacity: 0,
            y: 100,
        },
    }

    return (
        <>
            <BackBtn/>
            <AnimatePresence>
                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={variants}
                    transition={{
                        duration: 0.5,
                        ease: 'easeInOut',
                    }}
                >
                    <Table
                        size="small"
                        columns={columns}
                        dataSource={users}
                        pagination={{
                            position: [
                                positionPagination.top,
                                positionPagination.bottom
                            ],
                            hideOnSinglePage: true,
                            defaultPageSize: 10,
                        }}
                    />
                </motion.div>
            </AnimatePresence>
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