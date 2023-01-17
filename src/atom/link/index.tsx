import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

interface Props {
    children: string;
    path: string;
    cls?: string;
}
const Lk: React.FC<Props> = (props) => {
    return (
        <Link className={props.cls} to={props.path}>
            {props.children}
        </Link>
    );
};

export default Lk;
