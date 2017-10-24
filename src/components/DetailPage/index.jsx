import React from 'react';

import { connect } from 'react-redux';

import * as s from './style.css';

class DetailPage extends React.Component {
    componentDidMount() {
        if (this.props.location.pathname.slice(0, 6) === '/film/') {
            const id = this.props.location.pathname.slice(6);
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=368dc4d247ee599c6bbb4611f3977a98`).then(
                data => data.json(),
            ).then(
                data => this.props.setDetailPage(data),
            );      
        }
    }

    componentWillReceiveProps({ location }) {
        if (this.props.location.pathname.slice(0, 6) === '/film/' && location.pathname !== this.props.location.pathname) {
            const id = location.pathname.slice(6);
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=368dc4d247ee599c6bbb4611f3977a98`).then(
                data => data.json(),
            ).then(
                data => this.props.setDetailPage(data),
            );
        }
    }

    render() {
        return (
            <div className={s.detailPage}>
                <img src={`https://image.tmdb.org/t/p/w1000${this.props.film.poster_path}`} alt="img" />
                <div className={s.description}>
                    <div className={s.clearfix}>
                        <div className={s.showTitle}>{this.props.film.title}</div>
                        <div className={s.rating}>{this.props.film.vote_average}</div>
                    </div>
                    <div className={s.category}>{this.props.film.genres && this.props.film.genres[0].name}</div>
                    <div>
                        <span className={s.releaseYear}>{this.props.film.release_date && this.props.film.release_date.slice(0, 4)}</span>
                        <span>{this.props.film.runtime} min</span>
                    </div>
                    <div className={s.summary}>{this.props.film.overview}</div>
                    <div className={s.director}>{this.props.film.director}</div>
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
                type: 'SET_DETAIL_PAGE',
                movie,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
