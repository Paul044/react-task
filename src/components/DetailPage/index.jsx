import React from 'react';
import { connect } from 'react-redux';
import {
    URL_FIRST_PART_LENGTH,
    YEAR_NUMBER_OF_DIGITS,
    ACTIONS,
    URLS,
} from '../constants';

// import * as style from './style.css';
const style = {};

class DetailPage extends React.Component {
    componentDidMount() {
        if (this.props.location.pathname.slice(0, URL_FIRST_PART_LENGTH) === '/film/') {
            const id = this.props.location.pathname.slice(URL_FIRST_PART_LENGTH);
            fetch(URLS.GET_MOVIE + id + URLS.WITH_KEY).then(
                data => data.json(),
            ).then(
                data => this.props.setDetailPage(data),
            );
        }
    }

    componentWillReceiveProps({ location }) {
        if (this.props.location.pathname.slice(0, URL_FIRST_PART_LENGTH) === '/film/' && location.pathname !== this.props.location.pathname) {
            const id = location.pathname.slice(URL_FIRST_PART_LENGTH);
            fetch(URLS.GET_MOVIE + id + URLS.WITH_KEY).then(
                data => data.json(),
            ).then(
                data => this.props.setDetailPage(data),
            );
        }
    }

    render() {
        return (
            <div className={style.detailPage}>
                <img src={URLS.GET_IMAGE + this.props.film.poster_path} alt="img" />
                <div className={style.description}>
                    <div className={style.clearfix}>
                        <div className={style.showTitle}>{this.props.film.title}</div>
                        <div className={style.rating}>{this.props.film.vote_average}</div>
                    </div>
                    <div className={style.category}>{this.props.film.genres && this.props.film.genres[0].name}</div>
                    <div>
                        <span className={style.releaseYear}>{this.props.film.release_date && this.props.film.release_date.slice(0, YEAR_NUMBER_OF_DIGITS)}</span>
                        <span>{this.props.film.runtime} min</span>
                    </div>
                    <div className={style.summary}>{this.props.film.overview}</div>
                    <div className={style.director}>{this.props.film.director}</div>
                    <div>{this.props.film.show_cast}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        film: state.film || [],
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setDetailPage: (movie) => {
            dispatch({
                type: ACTIONS.SET_DETAIL_PAGE,
                movie,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
