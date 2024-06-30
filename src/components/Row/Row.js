import React, { useEffect, useState } from 'react'
import './Row.css'
import { instance } from '../../Api/Axios'
import { requests } from '../../Api/Request'
function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original"

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData();
  }, [fetchUrl])

  console.log(movies);

  return (
    <div className='row'>
      <h3 className='title'>{title}</h3>
      <div className="row__posters">
        {movies.map((movie) => 
         (
          <img key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt="" />
        )
      )}
      </div>
    </div>
  )
}

export default Row