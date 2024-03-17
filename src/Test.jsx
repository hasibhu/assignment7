

import { useEffect, useState } from 'react'

import './App.css'
import SingleCard from './SingleCard';

function App() {
    const [cards, setCards] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./recipes.json')
            .then(res => res.json())
            // .then(data => { console.log(data) })
            .then(data => { setCards(data) })
    }, [])
    // console.log(cards);


    const handelCart = (p) => {
        const isExist = cart.find((card) => card.id == p.id);
        if (!isExist) {
            setCart([...cart, p])
        }
        else {
            alert('Already available')
        }
    };

    return (
        <>
            <h1 className='text-3xl text-red-600'>Hello World</h1>

            <main className="mainContainer flex justify-around m-auto max-w-screen-xl">

                {/* card container */}
                <div className='cardsContainer grid grid-cols-2 gap-4 '>
                    {
                        cards.map(card => <SingleCard
                            key={card.id}
                            card={card}
                            handelCart={handelCart}
                        ></SingleCard>)
                    }

                </div>

                {/* cart container */}
                <div className='flex flex-col space-y-10'>
                    <div className='cartContainer  w-[490px] shadow-xl'>
                        <h1 className='text-center text-2xl font-bold border  pb-5'>Want To Cook: {cart.length}</h1>

                        <div className='cartTitle flex justify-around space-x-4'>
                            <h5>Name </h5>
                            <h5>Time</h5>
                            <h5>Calories</h5>
                            <h5></h5>
                        </div>

                        <div >
                            {
                                cart.map((item, index) => (
                                    <div key={item.id} className='cartInfo flex justify-around'>
                                        <h5>{index + 1}</h5>
                                        <h5 className="pb-5" key={item.id} >  {item.name} </h5>
                                        <h5 key={item.id} className="pb-5">{item.preparing_time}</h5>
                                        <h5 className="pb-5" key={item.id}>{item.calories}</h5>
                                        <button className='bg-green-500 rounded-xl h-10 w-28 ' key={item.id}>Prepare</button>
                                    </div>

                                ))
                            }

                        </div>

                    </div>

                    <div className='  w-[490px] shadow-xl space-y-6'>
                        <h1 className='text-center'>
                            Currently Cooking:
                        </h1>
                        <div className='cartTitle flex justify-around space-x-4'>
                            <h5>Name </h5>
                            <h5>Time</h5>
                            <h5>Calories</h5>
                            <h5></h5>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}

export default App
