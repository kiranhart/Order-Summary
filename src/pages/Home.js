import Card from '../components/Card';
import Button from '../components/Button';
import heroImage from '../images/illustration-hero.svg';
import musicImage from '../images/icon-music.svg';

const Home = () => {
    return <div className="bg-mobile bg-cover lg:bg-desktop md:bg-contain bg-no-repeat h-screen w-full grid place-items-center">
        <Card styles="flex flex-col items-center overflow-hidden shadow-2xl">
            <img src={heroImage} alt="illustration" className="relative" />
            <h1 className="text-[#1f2f56] text-2xl font-bold mt-8 mb-4">Order Summary</h1>
            <p className="text-[#7280a7] text-[16px] font-normal text-center px-12 leading-7">You can now listen to milions of songs, audiobooks, and podcasts on any device anywhere you like!</p>

            <Card styles="rounded-md flex flex-nowrap justify-around mt-9 p-4 w-[80%] bg-[#f5f7ff]" className="">
                <img src={musicImage} alt="music image" />
                <div className="-ml text-left">
                    <h1 className="font-bold text-xl text-[#1f2f56]">Annual Plan</h1>
                    <p className="text-[#7280a7] font-normal">$59.99/year</p>
                </div>
                <a className="text-[#3829e0] hover:opacity-75 font-bold text-md underline grid place-items-center cursor-pointer transition-all delay-75 ml-9">Change</a>
            </Card>
            <Button content="Proceed to Payment" bgColor="#3829e0" />
            <a href="#" className="text-[#7280a7] hover:brightness-50 text-[16px] font-bold text-lg mb-8 mt-3">Cancel Order</a>
        </Card>
    </div>;
};

export default Home;