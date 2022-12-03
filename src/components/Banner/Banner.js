import ChartLine from "../ChartLine/ChartLine";
import './Banner.scss'
function Banner() {
    return (
        <section className='banner'>
            <div className='wrapper'>
                <div className='banner_main'>
                    <img src="./images/main_photo.png" alt="main banner"></img>
                </div>
                <div className='chart_wrapper2'>
                    <ChartLine></ChartLine>
                </div>
            </div>


        </section>
    );
}

export default Banner;