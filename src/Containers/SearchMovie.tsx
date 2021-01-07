import * as React from 'react';
import { Component } from 'react';

import SearchMovieComponent from '../Components/SearchMovie';

import data from '../data/data.json';

export default class SearchMovie extends Component {
    state = {
        searchValue: ''
    };

    handleSubmit = (e, data) => {
        e.preventDefault();
        //window.scrollTo(0, this.formComponent);
        this.setState({searchValue: data.searchValue});
    };

    render() {
        return (
            <SearchMovieComponent
                handleSubmit={this.handleSubmit}
                moviesCount={data.length}
                movies={data}
                {...this.props}
            />
        ); 
    }
}