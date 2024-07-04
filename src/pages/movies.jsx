import React, { useEffect, useState } from "react"
import tmdbApi from "../api";

function Movies() {

    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        const fetchMovies = async() => {
            try{
                const response = await tmdbApi.get('/movie/popular');
                let popularMovies = response.data.results.map((movie)=>({
                    title: movie.title,
                    release_date: movie.release_date,
                    overview: movie.overview,
                    poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    vote_average: movie.vote_average,
                    popularity: movie.popularity
                }));

                setMovies(popularMovies);
            }catch(err){
                console.error('error fetching movies',err);
            }
        }

        fetchMovies();
    },[]);


    return(
        <div className="p-8">    
            <ul className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    movies.map((movie,index)=>(
                        <li key={index} className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
                            <h2 className="text-xl font-semibold mb-2 text-left">{movie.title}</h2>
                            <img src={movie.poster_path} alt={`${movie.title} poster`} className="w-full h-auto rounded mb-4"/>
                            <p className="text-gray-700 mb-2 text-left"><strong>Overview : </strong>{movie.overview}</p>
                            <p className="text-gray-700 mb-2 text-left"> <strong>Release date : </strong>{movie.release_date}</p>
                            <p className="text-gray-700 mb-2 text-left"><strong>Rating : </strong> {movie.vote_average}</p>
                            <p className="text-gray-700 mb-2 text-left"><strong>popularity : </strong>{movie.popularity}</p>                            
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Movies;