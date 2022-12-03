import './ButtonHexagon.scss'

function ButtonHexagon({ ...data }) {
    const { className, props, click } = data
    return (
        <button className={`btn_hexagon ${className ? `active` : ``}`} onClick={click}>
            <img className='btn_hexagon_icon' src={props.icon} alt='icon hexagon'></img>
            <span className='btn_hexagon_title'>{props.title}</span>
        </button>
    );
}

export default ButtonHexagon;