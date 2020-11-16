import React from "react";

let Notification = (props) => {
    let property = (props.type === 'ok')
        ? 'alert-success'
        : 'alert-danger';
    return <div className={"row alert "+property+" mt-2"}>
        <b>{props.name}</b>&nbsp;
        {props.description}
    </div>
}

export default Notification;