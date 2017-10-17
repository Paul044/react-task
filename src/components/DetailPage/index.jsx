import React from 'react';
import movies from 'data.json';
import * as s from './style.css';

class DetailPage extends React.Component {
    render() {
        const show = movies.filter(elem =>
            elem.show_id === parseInt(this.props.match.params.id, 10))[0];
        return (
            <div className={s.detailPage}>
                <img src={show.poster} alt="img" />
                <div className={s.description}>
                    <div className={s.clearfix}>
                        <div className={s.showTitle}>{show.show_title}</div>
                        <div className={s.rating}>{show.rating}</div>
                    </div>
                    <div className={s.category}>{show.category}</div>
                    <div>
                        <span className={s.releaseYear}>{show.release_year}</span>
                        <span>{show.runtime}</span>
                    </div>
                    <div className={s.summary}>{show.summary}</div>
                    <div className={s.director}>{show.director}</div>
                    <div>{show.show_cast}</div>
                </div>
            </div>
        );
    }
}

export default DetailPage;
