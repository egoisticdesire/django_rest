import React from 'react';
import {Link} from "react-router-dom";
import {Button, Table} from 'antd';
import {BackBtn, NewTodoBtn} from "../components/Buttons";
import {CheckCircleOutlined, CloseCircleOutlined} from "@ant-design/icons";
import {motion, AnimatePresence} from "framer-motion";


const ToDoList = ({todos, deleteTodo}) => {
    todos.map((item) => item.key = item.id);

    const positionPagination = {
        top: 'topRight',
        bottom: 'bottomRight',
    }
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
            title: 'Action',
            dataIndex: 'is_active',
            key: 'is_active',
            width: '7%',
            render: (is_active, item) => is_active ?
                <Button
                    type="link"
                    danger
                    style={{width: '100%'}}
                    onClick={() => deleteTodo(item.id)}
                    icon={<CloseCircleOutlined/>}
                /> :
                <Button
                    type="link"
                    style={{width: '100%'}}
                    icon={<CheckCircleOutlined/>}
                />,
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
                        dataSource={todos}
                        pagination={{
                            position: [
                                positionPagination.top,
                                positionPagination.bottom
                            ],
                            hideOnSinglePage: true,
                            defaultPageSize: 10,
                        }}
                    />
                    <NewTodoBtn/>
                </motion.div>
            </AnimatePresence>
        </>
    )

}

export {ToDoList};