import * as React from 'react';
import {Component} from 'react';
import ErrorBoundaryComponent from '../Components/ErrorBoundary'

export default class ErrorBoundary extends Component {
    state = {errorName: '', componentStack: '', hasError: false};

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(error, info) {
        this.setState({
            errorName: error.toString(),
            componentStack: info.componentStack            
        });
    }

    render() {
        const {errorName, componentStack, hasError} = this.state;
        if(hasError) {
            return <ErrorBoundaryComponent errorName={errorName} componentStack={componentStack} />;
        }

        return this.props.children;
    }
}