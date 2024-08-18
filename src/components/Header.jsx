import PropTypes from 'prop-types';
import { useState } from 'react';
const Header = ({ onSearch }) => {
    const [searchVal, setSearchVal] = useState('');
    return (
        <div className="bg-black flex justify-between items-center p-4 fixed w-full z-50">
            <div className="flex items-center space-x-8">
                <h1 className="text-red-600 uppercase text-[30px] font-bold">Movie</h1>
                <div className="flex items-center space-x-5">
                    <a href="#" className="text-white">Home</a>
                    <a href="#" className="text-white">About</a>
                    <a href="#" className="text-white">Contact</a>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <input type="text" placeholder="Search" onKeyDown={(e) => {
                    if (e.key == 'Enter') {
                        onSearch(searchVal);
                    }
                }}
                value={searchVal} onChange={(e) => setSearchVal(e.target.value)} className="p-2 rounded-md"/>
                <button className="bg-red-700 text-white py-1 px-2 rounded-md" onClick={() => onSearch(searchVal)}>Search</button>
            </div>
        </div>
    )
};

Header.propTypes = {
    onSearch: PropTypes.func,
}

export default Header;