import { CircularProgressbar } from 'react-circular-progressbar';
import getDateTime from "../../../ultis/getDateTime";
import 'react-circular-progressbar/dist/styles.css';
import './DateRate.scss'

function DateRate() {
    const percentage = 75;
    const dateNow = getDateTime(new Date()).slice(1, 3).join('/');
    return (
        <div className='date_rate'>
            <div className='date_rate_wrapper'>
                <p className='date'>{dateNow}</p>
                <p className='rate'>{percentage}%</p>
                <CircularProgressbar
                    value={percentage}
                    strokeWidth={2}
                />
            </div>
        </div>

    );
}

export default DateRate;