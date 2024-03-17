
import humanImg from './assets/humanFrame.png'
 

const Header = () => {
    return (
        <div className="flex flex-row items-center justify-around max-w-screen-xl m-auto mt-10">
            <div>
                <h1 className="text-6xl font-bold bg-blue-300 w-[110%] text-center rounded-2xl pb-1 hover:bg-[#5cba56] ">Vap<span className="text-red-600 text-7xl">i</span>ano</h1>
            </div>
            <div className="space-x-8">
                <a className="hover:bg-[#c9e54a] rounded-xl w-[180px]" href="Home">Home</a>
                <a className="hover:bg-[#c9e54a] rounded-xl w-[180px]" href="Recepi">Recepi</a>
                <a className="hover:bg-[#c9e54a] rounded-xl w-[180px]" href="About">About</a>
                <a className="hover:bg-[#c9e54a] rounded-xl w-[180px]" href="Search">Search</a>
            </div>
            <div className="flex gap-2 ">
                <input className="border border-black rounded-xl" type="text" id="fname"  placeholder="
                Search Here" name="fname"></input>
                <div className="bg-[#0BE58A] rounded-full hover:bg-[#49578f]">
                    <img src={humanImg} alt="" />
                </div>

            </div>
            
        </div>
        
    );
};

export default Header;