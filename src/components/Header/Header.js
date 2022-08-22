import Logo from './components/Logo';
import Navigation from './components/Navigation';
import './Header.css'

const Header = () => (
    <header className="nav">
        <div classNameName="nav__left">
            <Logo/>
        </div>
        <div className="nav__right">
            <Navigation />
        </div>
    </header>
)
export default Header;