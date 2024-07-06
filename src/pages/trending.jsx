import React, { useEffect, useState } from 'react'
import tmdbApi from '../api'

export default function Trending() {
    const [trendingData,setTrendingData] = useState([]);
    useEffect(()=>{
        const fetchTrending = async()=>{
            try{
                    const response = await tmdbApi.get('/trending/movie/day');
                    const data = response.data.results.map((item)=>({
                        title: item.title,
                        overview: item.overview,
                        posterposter_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                        vote_average: item.vote_average,
                        popularity: item.popularity,
                        release_date: item.release_date
                    }));
                    console.log(data);
            }catch(err){
                console.log('error fetching trending data',err);
            }
        }
        fetchTrending();
    })

    return (
        <div>trending</div>
    )
}
