import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Lk = ({ children, path, cls }) => {
    return (
        <Link className={cls} to={path}>
            {children}
        </Link>
    );
};

export default Lk;
