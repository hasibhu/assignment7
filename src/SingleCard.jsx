
import watch from './assets/clockIcon.png'
import calori from './assets/caloriFrame.png'

const SingleCard = ({ card, handelCart }) => {
    // console.log(card);
    const { image, name, description, preparing_time, calories, ingredients } = card;
    const { length, list } = ingredients;
    
    return (
        // <div>
        //     <div className="card w-[300px] flex flex-col items-center border border-solid border-black p-3">
        //         <img className='w-[150px] ' src={image} alt="" />
        //         <h1>{name}</h1>
        //         <p>{description}</p>

        //         <div className='cardFooter flex gap-24'>
        //             <h1>520 $</h1>
        //             <button className="addBtn  bg-sky-600 rounded-xl  w-28 h-7 hover:focus:bg-yellow-400 hover:active:bg-yellow-400">Add To Cart</button>
        //         </div>
        //     </div>
        // </div>
        
        <div className="border max-w-screen-xl  rounded-xl h-[790px] w-[280px] pt-5 m-auto">
            <img className="w-[270px] h-[200px] m-auto rounded-xl" src={image} alt="" />
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-sm text-slate-600">{description}</p>

            <div className="border-b border-t m-4">
                <h4 className="text-2xl font-bold">Ingredients: {length}</h4>
                <ul>
                    {
                        list.map((ingredient, index) => (
                            <li key={index}><span className='text-4xl font-bold'>.</span> {ingredient}</li>
                        ))
                    }

                </ul>
            </div>

            <div className="flex justify-between p-4">
                <div className="flex items-center">
                    <img className='w-6 h-6' src={watch} alt="" />
                    <h3 className="text-sm">  {preparing_time}</h3>
                </div>
                <div className="flex flex-row">
                    <img className='w-6 h-6' src={calori} alt="" />
                    <h3> {calories} </h3>
                </div>
            </div>

            
            {/* Want to cook button */}
            <div className="flex justify-center items-center pb-5">
                
                <button onClick={(e) => handelCart(card)}    
                className="w-28 h-10 text-center bg-yellow-300 rounded-xl font-bold">Want To Cook</button>
            </div>
        </div>
       
    );
};

export default SingleCard;