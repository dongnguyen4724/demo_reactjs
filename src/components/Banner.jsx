import IconRating from '../assets/rating.png';
import IconHalfRating from '../assets/rating-half.png';
import ImgTemp from '../assets/temp-1.jpeg';
import PlayButton from '../assets/play-button.png';

const Banner = () => {
    return (
        <div className="w-full h-[650px] bg-no-repeat bg-cover relative" style={{backgroundImage: 'url(/banner.png)'}}>
            <div className="absolute bg-black/40 w-full h-full ">
                <div className="w-full h-full flex items-center justify-center space-x-[30px] p-12 z-20">
                    <div className="flex flex-col items-baseline space-y-5 w-[50%] max-md:hidden">
                        <p className="text-white bg-gradient-to-r from-red-600 to-red-300 text-xl px-4 py-2">TV Show</p>
                        <div className="flex flex-col space-y-4 text-white">
                            <h2 className="text-4xl font-bold">Nghe nói em thích tôi</h2>
                            <div className="flex items-center justify-start space-x-2">
                                <img src={IconRating} alt="rating" className="w-8 h-8" />
                                <img src={IconRating} alt="rating" className="w-8 h-8" />
                                <img src={IconRating} alt="rating" className="w-8 h-8" />
                                <img src={IconRating} alt="rating" className="w-8 h-8" />
                                <img src={IconHalfRating} alt="rating" className="w-8 h-8" />
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                  It has survived not only five centuries, but also the leap into electronic typesetting,</p>
                            <div className="flex justify-start items-center space-x-4">
                                <button className='bg-black font-bold px-3 py-2'>Chi tiết</button>
                                <button className='bg-red-600 font-bold px-3 py-2'>Xem phim</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[50%] flex justify-center items-center">
                        <div className='w-[300px] h-[400px] relative group'>
                            <img src={ImgTemp} alt="Temp image" className='w-full h-full object-cover'/>
                            <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center
                            backdrop-blur-sm opacity-0 group-hover:cursor-pointer
                            group-hover:opacity-100 transition-opacity duration-500 ease-in-out'>
                                <img src={PlayButton} alt="Play button" className='w-16 h-16'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Banner;