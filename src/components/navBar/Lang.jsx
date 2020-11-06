import React from "react";
import {changeLangCreator} from "../../redux/lang-reducer";


const Lang = (props) => {
    let onLangChange = (e) => {
        let value = e.target.alt;
        props.dispatch(changeLangCreator(value));
    }
    return (
        <div className="mr-md-2">
            <img src={"/img/"+props.lang.en+".png"} type="button" height="30px" alt="en" onClick={onLangChange}/>
            <img src={"/img/"+props.lang.ru+".png"} type="button" height="30px" alt="ru" onClick={onLangChange} /> 
        </div>
    
    )
}

export default Lang;