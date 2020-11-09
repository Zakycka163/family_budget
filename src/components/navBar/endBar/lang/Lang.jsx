import React from "react";

const Lang = (props) => {
    let LangChange = (e) => {
        let value = e.target.alt;
        props.onLangChange(value);
    }
    return (
        <div className="mr-md-2">
            <img className="mr-md-1"
                 src={"/img/"+props.flags.en+".png"}
                 type="button"
                 height="30px"
                 alt="en"
                 onClick={LangChange} />
            <img className="mr-md-1"
                 src={"/img/"+props.flags.ru+".png"}
                 type="button"
                 height="30px"
                 alt="ru"
                 onClick={LangChange} />
        </div>
    
    )
}

export default Lang;