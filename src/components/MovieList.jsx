import { useContext } from 'react'
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; 
import { MovieContext } from '../context/MovieProvider';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 7
    },
    tablet: {
        breakpoint: { max: 1200, min: 600 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 2
    }
};
const MovieList = ({ title, data }) => { 

    const {handleTrailer} = useContext(MovieContext);

    return (
        <div className="text-white p-10 mb-10">
            <h2 className="uppercase mb-4 font-normal text-xl">{title}</h2>
            <Carousel responsive={responsive}>
                {data && data.length > 0 && data.map((item) => (
                    <div key={item.id} className="w-[200px] h-[300px] relative hover:scale-105 transition-transform 
                    duration-500 ease-in-out" onClick={() => handleTrailer(item.id)}>
                        <div className="absolute top-0 left-0 w-full h-full bg-black/40">
                        </div>
                        <img src={`${import.meta.env.VITE_IMAGE_URL}${item.poster_path}`} alt={item.title} className="w-full h-full object-cover" />
                        <div className="absolute bottom-2 w-full ">
                            <p className="text-center uppercase">{item.title || item.origin_title}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
};

MovieList.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
}

export default MovieList;