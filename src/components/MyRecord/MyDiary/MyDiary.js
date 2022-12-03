import getDateTime from "../../../ultis/getDateTime";
import './MyDiary.scss'

function MyDiary({ props }) {
    const date = getDateTime(props.date).slice(0, 3).join('.');
    const time = getDateTime(props.date).slice(3, 5).join(':');

    return (
        <div className='my_diary_item'>
            <p className='date'> {date}</p>
            <p className='time'> {time}</p>
            <p className='content'>{`${props.content}`}</p>
        </div>
    );
}

export default MyDiary;