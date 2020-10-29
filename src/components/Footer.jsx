import React from "react";

const Footer = () => {
    return (
        <footer className="fixed-bottom" >
            <div className="p-1 bg-white font-weight-bold text-primary">
                <span>Санкт-Петербург 2020 </span>
                <a href="https://github.com/Zakycka163/RUPD" target="_blank" title="Репозиторий"
                   rel="noreferrer noopener">
                    <img src="/img/ico.ico" height="35px" alt="Иконка" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;