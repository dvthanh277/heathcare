import { Link } from "react-router-dom";
import getDateTime from "../../../ultis/getDateTime";
import './MyColumnItem.scss'

function MyColumnItem({ props }) {
    const date = getDateTime(props.date).slice(0, 3).join('.');
    const time = getDateTime(props.date).slice(3, 5).join(':');

    return (
        <div className='my_column_item' >
            <img src={props.image} alt={props.title}></img>
            <p className='date_time'>
                <span className='date'> {date}</span>
                <span className='time'> {time}</span>
            </p>
            <p className='title'>{props.title}</p>
            <ul className='tags'>
                {props.hashTags?.map((tag) => <li key={tag.id}><Link to='/'>#{tag.title}</Link></li>)}
            </ul>
        </div>
    );
}

export default MyColumnItem;