import React from "react";
import PageTitle from "../PageTitle";



const MainPage = (props) => {
    let lang = require("./lang.json");
    let lg = "en"
    return (
        <div>
            <PageTitle name={lang[lg].name} />
        </div>
    )
}

export default MainPage;