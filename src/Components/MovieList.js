import React from 'react';
import MovieCard from './MovieCard'
import movieList from '../App'
function MovieList({ movieList }) {
    return (
        <div className="listM" >
            <div
            >
                {movieList.map((movieList, i) => <MovieCard key={i} el={movieList} />)}
            </div>
        </div>
)
}

export default MovieList
