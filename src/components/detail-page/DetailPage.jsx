import React from 'react';
import PropTypes from 'prop-types';
import * as s from './DetailPage.css';

class DetailPage extends React.Component {
    render() {
        return (
            <div className={s.detailPage}>
                <img src={this.props.show.poster} alt="img" />
                <div className={s.description}>
                    <div className={s.clearfix}>
                        <div className={s.showTitle}>{this.props.show.show_title}</div>
                        <div className={s.rating}>{this.props.show.rating}</div>
                    </div>
                    <div className={s.category}>{this.props.show.category}</div>
                    <div>
                        <span className={s.releaseYear}>{this.props.show.release_year}</span>
                        <span>{this.props.show.runtime}</span>
                    </div>
                    <div className={s.summary}>{this.props.show.summary}</div>
                    <div className={s.director}>{this.props.show.director}</div>
                    <div>{this.props.show.show_cast}</div>
                </div>
            </div>
        );
    }
}

DetailPage.propTypes = {
    show: PropTypes.object,
};

DetailPage.defaultProps = {
    show: {},
};

export default DetailPage;
