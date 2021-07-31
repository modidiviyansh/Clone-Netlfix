 import React, {useState, useEffect } from 'react'
 import axios from './axios';
 import "./Row.css";


 const base_url = "https://image.tmdb.org/t/p/original/"
 function Row({ title,fetchUrl,isLargeRow}) {

    const [movies, setMovies] = useState([]);

    //Snippet Of Code which runs based on specific condition

    useEffect(() => {
        // if brackets , are balnks , we want it to run only once . 
        // if we add varaible , as varaible changes , effect will change 
        async function fetchData() { 
             const request = await axios.get(fetchUrl);
              
            setMovies(request.data.results);
            return request;
        }
    fetchData();
    }, [fetchUrl]);

    console.table(movies);

     return (
        <div className="row">

             <h2>{title}</h2>

                <div className="row_posters">
                {movies.map(movie => (
                <img 
                key={movie.id}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} 
                alt={movie.name}/>
                ) )}
        </div>


              {/* title */}
              
             {/* container --> posters */}
             
             {/* title */}

         </div>
     )
 }

 export default Row 