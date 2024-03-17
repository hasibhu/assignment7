import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './SingleCard';
import Header from './Header';
import Hero from './Hero';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [cards, setCards] = useState([]);
  const [cart, setCart] = useState([]);
  const [cooking, setCooking] = useState([]);

  useEffect(() => {
    fetch('./recipes.json')
      .then(res => res.json())
      .then(data => { setCards(data) })
  }, [])

  const handelCart = (p) => {
    const isExistInCart = cart.find((card) => card.id === p.id);
    

    if (!isExistInCart ) {
      setCart([...cart, p]);
    } else {
      // alert('Already available');
      showToast('Aleady Added');
    }
  };

  const showToast = (message) => {
    toast.success(message);
  };

  const prepareItem = (index) => {
    const itemToPrepare = cart[index];
    setCooking([...cooking, itemToPrepare]);
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const totalCookingTime = cooking.reduce((sum, curr) => sum + parseInt(curr.preparing_time), 0);
  const totalCalories = cooking.reduce((sum, curr) => sum + parseInt(curr.calories), 0);

  return (
    <>
      
      <Header></Header>

      <Hero></Hero>
      <div className='text-center pb-10 pt-10'>
        <h1 className='text-4xl font-bold pb-8'>Our Recipes</h1>
        <p>Indulge in our extensive array of mouthwatering recipes! From savory appetizers to  decadent desserts, <br />find culinary inspiration for every taste and occasion.</p>
      </div>

      {/* main  */}
      <main className="mainContainer flex justify-around m-auto max-w-screen-xl border-t border-sky-600 rounded-xl pt-3 mb-16">
        {/* card container */}
        <div className='cardsContainer grid grid-cols-2 gap-4 border-t border-red-700 rounded-xl'>
          {
            cards.map(card => <SingleCard
              key={card.id}
              card={card}
              handelCart={handelCart}
            ></SingleCard>)
          }
        </div>

        {/* cart container */}
        <div className='flex flex-col space-y-10 border rounded-xl h-[100%]'>
          <div className='cartContainer  w-[490px] shadow-xl border-t border-red-700 rounded-xl'>

            <h1 className='text-center text-2xl font-bold border  pb-5'>Want To Cook: {cart.length}</h1>
            <div className='cartTitle flex justify-around space-x-4'>
              <h5>Name</h5>
              <h5>Time</h5>
              <h5>Calories</h5>
              <h5></h5>
            </div>

            <div>
              {
                cart.map((item, index) => (
                  <div key={item.id} className='cartInfo flex justify-around'>
                    <h5>{index + 1}</h5>
                    <h5 className="pb-5" key={item.id}>  {item.name} </h5>
                    <h5 key={item.id} className="pb-5">{item.preparing_time}</h5>
                    <h5 className="pb-5" key={item.id}>{item.calories}</h5>
                    <button className='bg-green-500 rounded-xl h-10 w-28 ' onClick={() => prepareItem(index)}>Prepare</button>
                  </div>
                ))
              }
            </div>
          </div>

              {/* currently cooking */}
          <div className='border-t border-red-700 rounded-xl  w-[490px] shadow-xl space-y-6'>
            <h1 className='text-center text-2xl font-bold border  pb-5'>
              Currently Cooking: {cooking.length} 
            </h1>
            <div className='cookingTitle flex justify-center gap-28 space-x-4 '>
              <h5 className='text-2xl'>Name</h5>
              <h5 className='text-2xl'>Time</h5>
              <h5 className='text-2xl'>Calories</h5>
            
              
            </div>
            
            {
              cooking.map((item, index) => (
                <div key={item.id} className='cartInfo flex justify-around'>
                  {/* <h5>{index + 1}</h5> */}
                  <h5 className="pb-5" key={item.id}>{index + 1}.   {item.name} </h5>

                  <h5 key={item.id} className="pb-5">{item.preparing_time}</h5>

                  <h5 className="pb-5" key={item.id}>{item.calories}</h5>
                  
                </div>
                
              ))
            }
            <div className='flex flex-row justify-end gap-10 pb-10 border-t pt-4'>
              <h1 className=' font-bold'>Total Time: {totalCookingTime} Minutes</h1>
              <h1 className=' font-bold'>Total Calories: {totalCalories} KiloCal.</h1>
            </div>
          </div>
        </div>




        <div>
          <ToastContainer />
        </div>

       
        {/* <div className="h-[440px] m-auto bg-stone-200 pt-16 rounded-xl border-t-2 border-orange-300 mb-24">
          <div>
            
          </div>
        </div> */}

        
      </main>

      <footer className="h-[440px] m-auto bg-stone-200 pt-16 rounded-xl border-t-2 border-orange-300 mb-28">
        <div className="text-center space-y-8  border-b border-black border-dashed">
          <div>
            <h1 className="text-6xl font-bold bg-blue-300  text-center rounded-2xl pb-1 hover:bg-[#5cba56] ">Vap<span className="text-red-600 text-7xl">i</span>ano</h1>
          </div>
          <div>
            <p>Step back in time with our Vapiano Restaurant – where every dish is a nostalgic memory! <br /> Join us now for culinary delicacy!</p>
          </div>

        </div>

        <div>
          <p className="text-sm text-center pt-8">&copy; 2024, All Rights Reserved.</p>
        </div>
      </footer>
      
    </>
  )
}

export default App;
