import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as s from './style.css';

class MovieItem extends React.Component {
    render() {
        return (<div className={s.movieItem}>
            <Link to={`/film/${this.props.movie.id}`}>
                <img
                    src={`https://image.tmdb.org/t/p/w1000${this.props.movie.poster_path}`}
                    alt=""
                />
            </Link>
            <div>
                <span className={s.showTitle}>{this.props.movie.title}</span>
                <span className={s.releaseYear}>{this.props.movie.release_date.slice(0, 4)}</span>
            </div>
            <div className={s.category}>{this.props.movie.category}</div>
        </div>);
    }
}

MovieItem.propTypes = {
    movie: PropTypes.object,
};

MovieItem.defaultProps = {
    movie: {},
};
export default MovieItem;
