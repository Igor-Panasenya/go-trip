import './App.scss';
import Header from "./components/header/Header";
import Destinations from "./components/destinations/Destinations";
import Castomers from "./components/castomers/Castomers";
import Prepare from "./components/prepare/Prepare";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";
import {useState} from "react";

function App() {

    const [isActiveNav, setIsActiveNav] = useState(0);
    const [isActiveHumburger, setIsActiveHumburger] = useState(false);
    const activeNavItem = (index) => {
        setIsActiveNav(index, !isActiveHumburger);
        setIsActiveHumburger(!isActiveHumburger);
    }
    const navLinkItems = [
        {
            title: 'Home',
            url: '#home'
        },
        {
            title: 'Services',
            url: '#services'
        },
        {
            title: 'Pricing',
            url: '#pricing'
        },
        {
            title: 'Contact',
            url: '#contact'
        },
    ]

  return (
    <div className="App">
        <Header
            isActiveNav={isActiveNav}
            navLinkItems={navLinkItems}
            isActiveHumburger={isActiveHumburger}
            activeNav={activeNavItem}
            activeHumburger={activeNavItem}
        />
        <Destinations />
        <Castomers />
        <Prepare />
        <Subscribe />
        <Footer
            isActiveNav={isActiveNav}
            navLinkItems={navLinkItems}
            activeNav={activeNavItem}
        />

    </div>
  );
}

export default App;
