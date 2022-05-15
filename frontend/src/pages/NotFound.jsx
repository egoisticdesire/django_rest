import {Link} from "react-router-dom";
import React from "react";
import {BackBtn} from "../components/BackBtn";

const NotFoundPage = () => {
    return (
        <>
            <BackBtn/>
            <div>
                This page doesn't exist. Go <Link to='/'>Home</Link>.
            </div>
        </>
    )
}

export {NotFoundPage};