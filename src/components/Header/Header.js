import { Link } from 'react-router-dom';
import './Header.scss'
import Menu from './Menu/Menu';
import Navbar from './Navbar/Navbar';

function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <h1 className='header_logo'>
                    <Link to="/"><img src='./images/logo.png' alt='Healthy'></img></Link>
                </h1>
                <div className='header_menu'>
                    <Navbar></Navbar>
                    <Menu></Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;