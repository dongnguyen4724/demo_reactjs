import PropTypes from 'prop-types'; 
import { useContext } from 'react';
import { MovieContext } from '../context/MovieProvider';

const MovieSearch = ({title, data}) => { 
    const {handleTrailer} = useContext(MovieContext)

    return (
        <div className="text-white p-10 mb-10">
            <h2 className="uppercase mb-4 font-normal text-xl">{title}</h2>
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
                {data && data.length > 0 && data.map((item) => (
                    <div key={item.id} className="w-[200px] h-[300px] relative hover:scale-105 transition-transform 
                    duration-500 ease-in-out" 
                    onClick={() => handleTrailer(item.id)}
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-black/40">
                        </div>
                        <img src={`${import.meta.env.VITE_IMAGE_URL}${item.poster_path}`} alt={item.title} className="w-full h-full object-cover" />
                        <div className="absolute bottom-2 w-full ">
                            <p className="text-center uppercase">{item.title || item.origin_title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

MovieSearch.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
}

export default MovieSearch;