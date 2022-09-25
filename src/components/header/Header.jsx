import React, {useState} from 'react';
import './header.scss';

const Header = ({isActiveNav, navLinkItems, activeNav}) => {

    const [isActiveHumburger, setIsActiveHumburger] = useState(false);
    const onNavClick = (index) => {
        setIsActiveHumburger(false);
        activeNav(index);
    }

    return (
        <header className="header">
            <div className="container">

                <nav
                    className={isActiveHumburger ? "navbar nav-mobile" : "navbar"}
                >
                    <div className="nav-logo">
                        <h2 className="logo">
                            <a href="#">
                                GoTrip
                            </a>
                        </h2>
                    </div>

                    <ul className="nav-menu">
                        {navLinkItems.map((item, index) =>
                               <li
                                    key={item.title}
                                    onClick={() => onNavClick(index)}
                                    className="nav-link"
                               >
                                    <a
                                        className={isActiveNav === index ? "active" : ""}
                                        href={item.url}>
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

                <button
                    className={isActiveHumburger ? "hamburger active" : "hamburger"}
                    onClick={() => setIsActiveHumburger(!isActiveHumburger)}
                >
                    <span className="bar bar-top"></span>
                    <span className="bar bar-mid"></span>
                    <span className="bar bar-bottom"></span>
                </button>

                <div className="header-content">
                    <div className="header-badge">exsplore the world</div>
                    <h1 className="header-title">Explore The Natural Beauty Of Halmahera With Us</h1>
                    <div className="header-text">
                        <p>
                            explore the beauty of god's earth in a beautiful forest and have fun
                        </p>
                    </div>
                    <button className="header-btn">Exsplore Now</button>
                </div>
                <div className="header-imgs">
                    <img className="header-girl" src="./img/header/girl.png" alt="girl"/>
                </div>
            </div>
        </header>
    );
};

export default Header;