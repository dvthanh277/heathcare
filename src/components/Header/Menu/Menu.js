import { useState } from "react";
import { Link } from "react-router-dom";
import './Menu.scss'

function Menu() {

    //Data list menu
    const listMenuItem = [
        {
            title: '自分の記録',
            link: '/'
        },
        {
            title: '体重グラフ',
            link: '/'
        },
        {
            title: '目標',
            link: '/'
        },
        {
            title: '選択中のコース',
            link: '/'
        },
        {
            title: 'コラム一覧',
            link: '/'
        },
        {
            title: '設定',
            link: '/'
        }
    ]

    //State show menu
    const [showMenu, setShowMenu] = useState(false)

    //Handle click button menu
    const handleClick = () => setShowMenu(!showMenu)

    return (
        <div className='menu'>
            <button className='menu_icon' onClick={handleClick}>
                {showMenu
                    ? <img src='./images/icon_close.png' alt='icon close'></img>
                    : <img src='./images/icon_menu.png' alt='icon open'></img>}
            </button>
            <ul className={showMenu ? 'menu_content active' : 'menu_content'}>
                {listMenuItem.map((item, index) => <li key={index}><Link to={item.link}>{item.title}</Link></li>)}
            </ul>
        </div>

    );
}

export default Menu;