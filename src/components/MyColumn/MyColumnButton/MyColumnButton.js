import './MyColumnButton.scss'
function MyColumnButton({ title, subTitle }) {
    return (
        <div className='my_column_button'>
            <p className='title'>{title}</p>
            <p className='subTitle'>{subTitle}</p>
        </div>
    );
}

export default MyColumnButton;