import React from 'react';
import './footer.scss';

const Footer = ({isActiveNav, navLinkItems, activeNav}) => {

    return (
        <footer className="footer">
            <div className="container">
                <nav className="navbar">

                    <div className="nav-logo">
                        <h2 className="logo">
                            <a href="#">
                                GoTrip
                            </a>
                        </h2>
                    </div>

                    <ul className="nav-menu">
                        {navLinkItems.map((item, index) =>
                        <li key={item.title} onClick={() => activeNav(index)}>
                            <a href={item.url} className={isActiveNav === index ? "active" : ""}>
                                {item.title}
                            </a>
                        </li>
                        )}
                    </ul>
                    <div className="nav-login">
                        <button className="btn btnSignup">Sign up</button>
                        <button className="btn btnLogin">Login</button>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;