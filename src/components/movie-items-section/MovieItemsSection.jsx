import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from 'components/movie-item/movieItem';
import * as s from './movieItemsSection.css';

class MovieItemsSection extends React.Component {
    render() {
        return (
            <div className={s.movieItemsSection + ' ' + s.clearfix}>
                {this.props.items.length ? this.props.items.map(
                    elem => (<MovieItem
                        key={elem.show_id}
                        movie={elem}
                        onImageClick={this.props.onImageClick}
                    />)) : <div className={s.emptyState}> No films found </div>}
            </div>
        );
    }
}

MovieItemsSection.propTypes = {
    items: PropTypes.array,
    onImageClick: PropTypes.func,
};

MovieItemsSection.defaultProps = {
    items: [],
    onImageClick: () => {},
};

export default MovieItemsSection;
