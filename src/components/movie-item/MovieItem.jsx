import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as s from './MovieItem.css';

class MovieItem extends React.Component {
    onImageClick() {
        this.props.onImageClick(this.props.movie.show_id);
    }
    render() {
        return (<div className={s.movieItem}>
            <Link to={`/film/${this.props.movie.show_id}`}>
                <img
                    onClick={this.onImageClick.bind(this)}
                    src={this.props.movie.poster}
                    alt=""
                />
            </Link>
            <div>
                <span className={s.showTitle}>{this.props.movie.show_title}</span>
                <span className={s.releaseYear}>{this.props.movie.release_year}</span>
            </div>
            <div className={s.category}>{this.props.movie.category}</div>
        </div>);
    }
}

MovieItem.propTypes = {
    onImageClick: PropTypes.func,
    movie: PropTypes.object,
};

MovieItem.defaultProps = {
    onImageClick: () => {},
    movie: {},
};
export default MovieItem;
