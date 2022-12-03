import './MyExercise.scss'
function MyExercise({ props }) {
    return (
        <div className='my_exercise_item'>
            <p className='title'>{props.title}</p>
            <p className='calo'>{props.calo}</p>
            <p className='time'>{props.time}</p>
        </div>
    );
}

export default MyExercise;