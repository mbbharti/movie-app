import React, { useEffect, useState } from 'react';
import '../styling/Navbar.css';
import { BsSearch } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { setSearchInput } from '../features/UserSlice'

const Navbar = () => {
    const [searchInput,setInput] = useState('tech');
    const dispatch = useDispatch();

    const handleClick = (e)=>{
        e.preventDefault();
        dispatch(setSearchInput(searchInput));
        setInput(" ");
    }

    const handleChange = (e) =>{
        setInput(e.target.value);
    }

    return (
        <>
            <div className="navbar">
                <div className="navbar__header">
                    <h1>Movie</h1>
                    <p>Search Your Favorite Movie <br />Powered by OMDB api </p>
                    <div className="navbar__searchBar">
                    <BsSearch onClick={handleClick} className="navbar__icon" />
                        <input type="text" onChange={handleChange} value={searchInput} placeholder="Seach Movie, TV Series, Web Shows" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
