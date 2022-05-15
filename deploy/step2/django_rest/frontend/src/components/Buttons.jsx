import {useNavigate} from "react-router-dom";
import {Button, Divider} from "antd";
import React from "react";

const BackBtn = () => {
    const navigate = useNavigate();
    return (
        <>
            <Divider orientation='left' plain>
                <Button
                    type="ghost"
                    onClick={() => navigate(-1)}
                >
                    back
                </Button>
            </Divider>
        </>
    )
}

const NewProjectBtn = () => {
    const navigate = useNavigate();
    return (
        <>
            <Button
                type="primary"
                style={{marginTop: '1rem', width: '100%'}}
                onClick={() => navigate('/projects/create')}
            >
                New Project
            </Button>
        </>
    )
}

const NewTodoBtn = () => {
    const navigate = useNavigate();
    return (
        <>
            <Button
                type="primary"
                style={{marginTop: '1rem', width: '100%'}}
                onClick={() => navigate('/todos/create')}
            >
                New Todo
            </Button>
        </>
    )
}

export {BackBtn, NewProjectBtn, NewTodoBtn}