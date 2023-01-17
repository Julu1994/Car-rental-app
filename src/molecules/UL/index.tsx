import React from "react";

interface Props {
    children: any;
    cls: string;
}
const Ul: React.FC<Props> = (props) => (
    <ul className={props.cls}>{props.children}</ul>
);
export default Ul;
