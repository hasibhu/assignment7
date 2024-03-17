import hero1 from './assets/hero.jpg';

const Hero = () => {
    return (
        <div className="pt-10 mb-10" >
            <div className='relative'>
                <div className='flex justify-center'>
                    <img src={hero1} alt="" />
                </div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                    <h1 className="text-white text-4xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="text-white text-xs pt-8 pb-5">Welcome to our world of innovation and <br /> inspiration. Explore limitless possibilities with our cutting-edge solutions tailored just for you. Join us on a journey where creativity meets functionality, where dreams turn into reality. </p>

                    <div className="flex justify-center gap-6 pt-5">
                        <button className="bg-green-300 rounded-2xl h-12 w-36 hover:bg-yellow-400">Explore More</button>
                        <button className="bg-clear text-white border border-black rounded-2xl h-12 w-36 hover:bg-yellow-400">Explore More</button>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hero;