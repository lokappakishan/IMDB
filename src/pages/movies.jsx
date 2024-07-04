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
        <div>    
            <h1>Movies</h1>
            <ul>
                {
                    movies.map((movie,index)=>(
                        <li key={index}>
                            <h2>Title:{movie.title}</h2>
                            <img src={movie.poster_path} alt={`${movie.title} poster`} />
                            <p>Overview:{movie.overview}</p>
                            <p>Release date: {movie.release_date}</p>
                            <p><strong>Rating:</strong> {movie.vote_average}</p>
                            <p>popularity:{movie.popularity}</p>                            
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Movies;