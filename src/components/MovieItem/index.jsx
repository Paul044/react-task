import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    URLS,
    YEAR_NUMBER_OF_DIGITS,
} from '../constants';

// import * as style from './style.css';
const style = {};

class MovieItem extends React.Component {
    render() {
        return (<div className={style.movieItem}>
            <Link to={`/film/${this.props.movie.id}`}>
                <img
                    src={URLS.GET_IMAGE + this.props.movie.poster_path}
                    alt=""
                />
            </Link>
            <div>
                <span className={style.showTitle}>{this.props.movie.title}</span>
                <span className={style.releaseYear}>{this.props.movie.release_date.slice(0, YEAR_NUMBER_OF_DIGITS)}</span>
            </div>
            <div className={style.category}>{this.props.movie.category}</div>
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
