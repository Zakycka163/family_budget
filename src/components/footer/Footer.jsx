import React from "react";

const Footer = (props) => {
    return (
        <footer className="fixed-bottom container" >
            <div className="p-1 font-weight-bold">
                <span>{props.footer.city} 2020 </span>
                <a href="https://github.com/Zakycka163/family_budget" target="_blank" title="Link to Project"
                   rel="noreferrer noopener">
                    <img src="/img/ico.png" height="30px" alt="Icon" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;