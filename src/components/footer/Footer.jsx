import React from "react";

const Footer = (props) => {
    return (
        <footer className="fixed-bottom" >
            <div className="p-1 bg-white font-weight-bold text-primary">
                <span>{props.footer.city} 2020 </span>
                <a href="https://github.com/Zakycka163/family_budget" target="_blank" title="Link to Project"
                   rel="noreferrer noopener">
                    <img src="/img/ico.ico" height="35px" alt="Icon" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;