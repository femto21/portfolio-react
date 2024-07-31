import React from "react";

function Header() {
    return (
        <section id="my-details">
                <div id="main-heading">Arpit Gahlot</div>
                <div id="university-details">Bachelor of Computer Science, Dalhousie University</div>
                <div className="icons">
                    <a href="https://github.com/femto21" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github fa-xl"></i>
                    </a>
                    <a href="mailto: arpitgahlot2003@gmail.com">
                        <i className="fa-regular fa-envelope fa-xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/arpit-gahlot-1bb63a300" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin-in fa-xl"></i>
                    </a>
                    <a href="https://discord.com/users/530748472278646805" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-discord fa-xl"></i>
                    </a>
                </div>
            </section>
    )
};

export default Header;