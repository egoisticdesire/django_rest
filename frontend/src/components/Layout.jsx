import React, {useState, useEffect} from "react";
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {
    Button,
    Divider,
    Form,
    Input,
    Checkbox,
} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

const Layout = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <>
            <header>
                <NavLink to='/'>home</NavLink>
                <NavLink to='/users'>users</NavLink>
                <NavLink to='/projects'>projects</NavLink>
                <NavLink to='/tasks'>todolist</NavLink>
            </header>
            <main className='container'>

                <Divider/>
                <Button ghost block onClick={goBack}>back</Button>
                <Divider/>
                <Outlet/>

            </main>
        </>
    );
}

export {Layout};