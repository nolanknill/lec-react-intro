import "./Header.scss";
import logoSrc from "../../assets/images/logo.jpeg";

function Header() {
    const pageTitle = "Hello World";

    return (
        <header className="header">
            <h1>{pageTitle}</h1>
            <p className="header__text">Copyright 2023</p>
            <img src={logoSrc} alt="Site Logo"/>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;