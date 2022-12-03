import Button from '../Buttons/Button/Button';
import './MyColumn.scss'
import MyColumnButton from './MyColumnButton/MyColumnButton';
import MyColumnItem from './MyColumnItem/MyColumnItem';

function MyColumn() {

    //List button
    const listButtons = [
        {
            title: 'RECOMMENDED COLUMN',
            subTitle: 'オススメ'
        },
        {
            title: 'RECOMMENDED DIET',
            subTitle: 'ダイエット'
        },
        {
            title: 'RECOMMENDED BEAUTY',
            subTitle: '美容'
        },
        {
            title: 'RECOMMENDED HEALTH',
            subTitle: '健康'
        },
    ]

    //Data item
    const listData = [
        {
            id: 0,
            image: './images/column-1.png',
            date: 1621268758000,
            title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            hashTags: [
                {
                    id: 100,
                    title: '魚料理'
                },
                {
                    id: 101,
                    title: '和食'
                },
                {
                    id: 102,
                    title: 'DHA'
                },
            ]
        },
        {
            id: 1,
            image: './images/column-2.png',
            date: 1621268758000,
            title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            hashTags: [
                {
                    id: 100,
                    title: '魚料理'
                },
                {
                    id: 101,
                    title: '和食'
                },
                {
                    id: 102,
                    title: 'DHA'
                },
            ]

        },
        {
            id: 2,
            image: './images/column-3.png',
            date: 1621268758000,
            title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            hashTags: [
                {
                    id: 100,
                    title: '魚料理'
                },
                {
                    id: 101,
                    title: '和食'
                },
                {
                    id: 102,
                    title: 'DHA'
                },
            ]

        },
        {
            id: 3,
            image: './images/column-4.png',
            date: 1621268758000,
            title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            hashTags: [
                {
                    id: 100,
                    title: '魚料理'
                },
                {
                    id: 101,
                    title: '和食'
                },
                {
                    id: 102,
                    title: 'DHA'
                },
            ]

        },
        {
            id: 4,
            image: './images/column-5.png',
            date: 1621268758000,
            title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            hashTags: [
                {
                    id: 100,
                    title: '魚料理'
                },
                {
                    id: 101,
                    title: '和食'
                },
                {
                    id: 102,
                    title: 'DHA'
                },
            ]

        },
        {
            id: 5,
            image: './images/column-6.png',
            date: 1621268758000,
            title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            hashTags: [
                {
                    id: 100,
                    title: '魚料理'
                },
                {
                    id: 101,
                    title: '和食'
                },
                {
                    id: 102,
                    title: 'DHA'
                },
            ]

        },
        {
            id: 6,
            image: './images/column-7.png',
            date: 1621268758000,
            title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            hashTags: [
                {
                    id: 100,
                    title: '魚料理'
                },
                {
                    id: 101,
                    title: '和食'
                },
                {
                    id: 102,
                    title: 'DHA'
                },
            ]

        },
        {
            id: 7,
            image: './images/column-8.png',
            date: 1621268758000,
            title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            hashTags: [
                {
                    id: 100,
                    title: '魚料理'
                },
                {
                    id: 101,
                    title: '和食'
                },
                {
                    id: 102,
                    title: 'DHA'
                },
            ]

        },

    ]

    return (
        <section className='my_column'>
            <div className='container'>
                <div className='my_column_buttons'>
                    {listButtons.map((item, index) => <MyColumnButton key={index} title={item.title} subTitle={item.subTitle}></MyColumnButton>)}
                </div>
                <div className='my_column_items'>
                    {listData.map((item) => <MyColumnItem key={item.id} props={item}></MyColumnItem>)}
                </div>
                <Button title={'コラムをもっと見る'}></Button>
            </div>
        </section>
    );
}

export default MyColumn;