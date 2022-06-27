import React from 'react';
import PropTypes from 'prop-types';

function Movie({movie, coverImg, title, summary, genres}) {
    return (
        <div>
            <img src={coverImg} alt={movie.title} />
            <h3>{title}</h3>
            <p>{summary}</p>
            {(movie.hasOwnProperty("genres") ? 
                <ul>
                    {genres.map((g) => <li key={g}>{g}</li>)}
                </ul> : null)}
        </div>
    )
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;