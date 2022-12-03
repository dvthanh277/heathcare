import './MyRecordButton.scss'
function MyRecordButton({ title, subTitle, image }) {
    return (
        <div className='my_record_button'>
            <p className='title'>{title}</p>
            <p className='subTitle'>{subTitle}</p>
            <img src={image} alt={title}></img>
        </div>
    );
}

export default MyRecordButton;