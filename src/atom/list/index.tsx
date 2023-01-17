import React from "react";

interface Props {
    children: any;
    cls?: string;
}
const Li: React.FC<Props> = (props) => {
    return <li className={props.cls}> {props.children}</li>;
};

export default Li;
