import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

function Movie({movie, id, coverImg, title, summary, genres}) {
    return (
        <div>
            <img src={coverImg} alt={movie.title} />
            <h3><Link to={`/movie/${id}`}>{title}</Link></h3>
            <p>{summary}</p>
            {(movie.hasOwnProperty("genres") ? 
                <ul>
                    {genres.map((g) => <li key={g}>{g}</li>)}
                </ul> : null)}
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;