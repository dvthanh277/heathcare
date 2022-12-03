import getDateTime from "../../../ultis/getDateTime";
import './MyPageItem.scss'

function MyPageItem({ props, order }) {
    const date = getDateTime(props.date).slice(1, 3).join('.');
    return (
        <div className='my_page_item' >
            <img src={props.image} alt={props.title}></img>
            <p>
                <span className='date'>{date}</span>
                <span className='title'>{props.title}</span>
            </p>
        </div>
    );

}

export default MyPageItem;