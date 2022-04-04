import {useNavigate} from "react-router-dom";
import React from "react";
import {Button, Result} from "antd";
import {HomeOutlined} from "@ant-design/icons";

const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="ghost" onClick={() => navigate('/')} icon={<HomeOutlined/>}>На главную</Button>}
            />
        </>
    )
}

export {NotFoundPage};