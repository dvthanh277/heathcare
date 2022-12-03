/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Button from '../Buttons/Button/Button';
import ButtonHexagon from '../Buttons/ButtonHexagon/ButtonHexagon';
import './MyPage.scss'
import MyPageItem from './MyPageItem/MyPageItem';

function MyPage() {
    //List button
    const listButtons = [
        {
            title: 'Morning',
            icon: './images/icon_knife.png',
            type: 'morning'
        },
        {
            title: 'Lunch',
            icon: './images/icon_knife.png',
            type: 'lunch'
        },
        {
            title: 'Dinner',
            icon: './images/icon_knife.png',
            type: 'dinner'
        },
        {
            title: 'Snack',
            icon: './images/icon_cup.png',
            type: 'snack'
        },
    ]

    //Data item
    const listData = [
        {
            image: './images/my_page01.png',
            date: 1653134400000,
            title: 'Morning',
            type: 'morning',
        },
        {
            image: './images/my_page02.png',
            date: 1653134400000,
            title: 'Lunch',
            type: 'lunch',
        },
        {
            image: './images/my_page03.png',
            date: 1653134400000,
            title: 'Dinner',
            type: 'dinner',
        },
        {
            image: './images/my_page04.png',
            date: 1653134400000,
            title: 'Snack',
            type: 'snack',
        },
        {
            image: './images/my_page05.png',
            date: 1653134400000,
            title: 'Morning',
            type: 'morning',
        },
        {
            image: './images/my_page06.png',
            date: 1653048000000,
            title: 'Lunch',
            type: 'lunch',
        },
        {
            image: './images/my_page07.png',
            date: 1653048000000,
            title: 'Dinner',
            type: 'dinner',
        },
        {
            image: './images/my_page08.png',
            date: 1653134400000,
            title: 'Snack',
            type: 'snack',
        },
    ]

    //State type
    const [type, setType] = useState('');
    const [activeClass, setActiveClass] = useState(false)
    const [items, setItems] = useState(listData);

    useEffect(() => {
        if (type === '') {
            setItems(listData)
        }
        else {
            setItems(listData.filter((item) => item.type === type))
        }
    }, [type])


    return (
        <section className='my_page'>
            <div className='container'>
                <div className='my_page_buttons'>
                    {listButtons.map((item, index) =>
                        <ButtonHexagon
                            key={index}
                            props={item}
                            className={item.type === type ? activeClass : ''}
                            click={() => {
                                if (item.type === type && activeClass) {
                                    setType('')
                                    setActiveClass(false)
                                }
                                else {
                                    setType(item.type)
                                    setActiveClass(true)
                                }
                            }
                            }
                        >
                        </ButtonHexagon>
                    )}
                </div>
                <div className='my_page_items'>
                    {items.map((item, index) => <MyPageItem key={index} props={item} order={index + 1}></MyPageItem>)}
                </div>
                <Button title={'記録をもっと見る'}></Button>
            </div>
        </section>
    );
}

export default MyPage;