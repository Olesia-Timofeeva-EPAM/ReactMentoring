import {connect} from 'react-redux';
import SearchFormContainer from './container';
import { setSearchBy } from './actions';
import { searchBySelector } from '../core/store/selectors';

export const mapStateToProps = state => ({
    searchBy: searchBySelector(state),
});

const mapDispatchToProps = { setSearchBy };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchFormContainer);