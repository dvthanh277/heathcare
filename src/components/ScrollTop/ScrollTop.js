import { useEffect, useState } from 'react';
import './ScrollTop.scss'
function ScrollTop() {

    const [showTop, setShowTop] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 200)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div className={`scroll_top ${showTop ? `active` : ``}`} >
            <button onClick={handleClick}><img src="./images/component_scroll.png" alt="scroll_top"></img></button>
        </div>
    );
}

export default ScrollTop;