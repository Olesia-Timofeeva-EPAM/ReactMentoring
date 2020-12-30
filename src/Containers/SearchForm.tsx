import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchFormComponent from '../Components/SearchForm';

export default class SearchForm extends Component {
    state = {
        searchValue: ''
    }

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
      };

    handleInput = e => {
        this.setState({ [`${e.target.name}Value`]: e.target.value});
    };

    render() {
        const {handleSubmit} = this.props;
        return (
            <SearchFormComponent
                handleSubmit={handleSubmit}
                handleInput={this.handleInput}
                state={this.state}
            />
        );
    }
}