import { Link } from "react-router-dom";
import './Navbar.scss'

function Navbar() {

    //Data navbar
    const listNavbarItem = [
        {
            title: '自分の記録',
            link: '/',
            icon: './images/icon_memo.png',
            type: 'action'
        },
        {
            title: 'チャレンジ',
            link: '/',
            icon: './images/icon_challenge.png',
            type: 'action'
        },
        {
            title: 'お知らせ',
            link: '/',
            icon: './images/icon_info.png',
            type: 'notification'
        }
    ]

    //Number notification
    const notification = 1;
    return (
        <ul className='navbar'>
            {listNavbarItem.map(
                (item, index) =>
                    <li key={index} className='navbar_item'>
                        <Link to={item.link}>
                            <span className='navbar_icon'>
                                <img src={item?.icon} alt={item.title}></img>
                                {item.type === 'notification' ? <span className='navbar_notice'>{notification}</span> : ''}
                            </span>
                            <span className='navbar_title'>{item.title}</span>
                        </Link>
                    </li>
            )
            }
        </ul>

    );
}

export default Navbar;