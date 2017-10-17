import React from 'react';
import * as s from './style.css';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'title',
            inputValue: props.match.params.query
        };
    }
    titleBtnClick() {
        this.setState({
            selected: 'title',
        });
    }
    directorBtnClick() {
        this.setState({
            selected: 'director',
        });
    }

    handleSearch() {
        if (this.state.inputValue !== '') {
            this.props.history.push('/search/' + this.state.inputValue + '?searchBy=' + this.state.selected);
        }
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value,
        });
    }

    render() {
        return (
            <div className={s.searchForm}>
                <label>FIND YOUR MOVIE</label>
                <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
                <div className={s.btnRow}>
                    <label>SEARCH BY</label>
                    <button
                        className={this.state.selected === 'title' ? s.active : ''}
                        onClick={this.titleBtnClick.bind(this)}
                    >TITLE</button>
                    <button
                        className={this.state.selected === 'director' ? s.active : ''}
                        onClick={this.directorBtnClick.bind(this)}
                    >DIRECTOR</button>
                    <button
                        className={s.searchBtn}
                        onClick={this.handleSearch.bind(this)}
                    >SEARCH</button>
                </div>
            </div>
        );
    }
}

export default SearchForm;
