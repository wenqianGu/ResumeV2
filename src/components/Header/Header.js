import './Header.css'

const Header = () => (
    <header class="nav">
    <div class="nav__left">
        <div class="logo">
            <span className="logo__highlight">Lisa</span>
            GU
        </div>
    </div>
    <div class="nav__right">
        <div class = "navbar">
            <a class="nav__item" href="HOME">Home</a>
            <a class="nav__item" href="RESUME">Resume</a>
            <a class="nav__item" href="SERVICES">Services</a>
            <a class="nav__item" href="BLOG">Blog</a>
            <a class="nav__item" href="CONTACTS">Contact</a>
        </div>
    </div>
</header>
)
export default Header;