import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearchInput, setMovieData } from '../features/UserSlice';
import '../styling/MovieData.css'

const MovieData = () => {
    const searchInput = useSelector(selectSearchInput);
    const dispatch = useDispatch();
    const [data, setData] = useState();
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=4a63477c&s=${searchInput}`;

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                console.log(response.data.Search);
                setData(response.data.Search);
                dispatch(setMovieData(response.data.Search));
            })
            .catch((err) => {
                console.log("error occured :", err);
            })
    }, [searchInput])
    return (
        <>
            <div className="movieData__head container">
                <h1>List of Seach Movies</h1>
                <div className="movieData__content row">
                    {data?.map((movie)=>(

                    <div class="movieData__card card bg-dark text-white">
                        <img src={movie.Poster} class="card-img" alt="Movie Image" />
                            <div class="card-img-overlay">
                                <h5 class="card-title">{movie.Title}</h5>
                                <p class="card-text"><span>Type - </span>{movie.Type} <br /> <span>Year - </span>{movie.Year} <br/> <span>imdbID - </span>{movie.imdbID}</p>
                                {/* <p class="card-text"><span>Year - </span>{movie.Year}</p>
                                <p class="card-text"><span>imdbID - </span>{movie.Type}</p> */}
                                
                            </div>
                    </div>

                    ))}


                    </div>
                </div>
        </>
    )
}

export default MovieData
