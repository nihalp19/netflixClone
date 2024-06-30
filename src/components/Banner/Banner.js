import React, { useEffect, useState } from 'react'
import "./Banner.css"
import { instance } from '../../Api/Axios';
import { requests } from '../../Api/Request';
function Banner() {
    
    const [movie,setMovie] = useState([]);

    useEffect(() => {
        async function fetechData()
        {
            const request = await instance.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.ceil(Math.random() * request.data.results.length-1)
            ])
            return request;
        }
        fetechData();
    },[])

    console.log(movie);
    function truncate(string,n)
    {
        return string?.length > n ? string.substr(0,n-1) + '...' : string;
    }

    return (
        <div className='banner' style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
            ,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <div className="banner__contents">
                <h1 className='banner__titile'>
                    {movie?.name || movie?.title || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className='banner__description'>
            {truncate(`${movie.overview}`,150)}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </div>
    )
}

export default Banner