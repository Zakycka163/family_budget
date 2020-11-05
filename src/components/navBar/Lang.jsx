import React from "react";
import {changeLangCreator} from "../../redux/lang-reducer";


const Lang = (props) => {
    let onLangChange = (e) => {
        let value = e.target.value;
        props.dispatch(changeLangCreator(value));
    }
    return (
        <div>
            <span className="mr-md-1">
                <img src={"/img/"+props.lang+"_flag.png"} height="35px" alt="flag" />
            </span>
            <select className="custom-select mr-md-3" value={props.lang} onChange={onLangChange}>
                <option value="en">en</option>
                <option value="ru">ru</option>
            </select>
        </div>
    )
}

export default Lang;