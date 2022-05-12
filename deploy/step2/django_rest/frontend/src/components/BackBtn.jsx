import {useNavigate} from "react-router-dom";
import {Button, Divider} from "antd";
import React from "react";

const BackBtn = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <>
            <Divider orientation='left' plain>
                <Button type="ghost" onClick={goBack}>back</Button>
            </Divider>
        </>
    )
}

export {BackBtn}