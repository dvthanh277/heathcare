import Button from '../Buttons/Button/Button';
import ChartLine from '../ChartLine/ChartLine';
import MyDiary from './MyDiary/MyDiary';
import MyExercise from './MyExercise/MyExercise';
import './MyRecord.scss'
import MyRecordButton from './MyRecordButton/MyRecordButton';

function MyRecord() {
    //Data Exercise
    var dataExercise = []
    for (let index = 0; index < 48; index++) {
        dataExercise.push({
            id: index,
            title: '家事全般（立位・軽い）',
            calo: '26kcal',
            time: '10min'
        })
    }
    //Data Diary
    var dataDiary = []
    for (let index = 0; index < 8; index++) {
        dataDiary.push({
            id: index,
            date: 1621614300000,
            content: '私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
        })
    }
    return (
        <section className='my_record'>
            <div className='container'>

                <div className='my_record_buttons'>
                    <MyRecordButton title={'BODY RECORD'} subTitle={'自分のカラダの記録'} image={'./images/MyRecommend-1.png'}></MyRecordButton>
                    <MyRecordButton title={'MY EXERCISE'} subTitle={'自分の運動の記録'} image={'./images/MyRecommend-2.png'}></MyRecordButton>
                    <MyRecordButton title={'MY DIARY'} subTitle={'自分の日記'} image={'./images/MyRecommend-3.png'}></MyRecordButton>
                </div>

                <div className='my_record_body'>
                    <div className='body_title_wrapper'>
                        <h2 className='body_title'>BODY <br />RECORD</h2>
                        <p className='body_date'>2021.05.21</p>
                    </div>
                    <div className='chart_wrapper1'>
                        <ChartLine></ChartLine>
                    </div>
                    <div className='chart_btns'>
                        <button className='chart_btn'>日</button>
                        <button className='chart_btn'>週</button>
                        <button className='chart_btn'>月</button>
                        <button className='chart_btn active'>年</button>
                    </div>
                </div>

                <div className='my_record_exercise'>
                    <div className='exercise_title_wrapper'>
                        <h2 className='exercise_title'>MY<br />EXERCISE</h2>
                        <p className='exercise_date'>2021.05.21</p>
                    </div>
                    <div className='my_exercise'>
                        {dataExercise.map((exercise) => <MyExercise key={exercise.id} props={exercise}></MyExercise>)}
                    </div>
                </div>

                <div className='my_record_diary'>
                    <h2 className='diary_title'>MY DIARY</h2>
                    <div className='my_diarys'>
                        {dataDiary.map((diary) => <MyDiary key={diary.id} props={diary}></MyDiary>)}
                    </div>
                </div>
                <Button title={'自分の日記をもっと見る'}></Button>
            </div>
        </section>
    );
}

export default MyRecord;