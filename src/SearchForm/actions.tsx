import {SET_SEARCH_BY, SET_SORT_BY} from '../core/store/constants';

export const setSearchBy = searchBy => dispatch =>    
    dispatch({
        type: SET_SEARCH_BY,
        payload: searchBy,
    });

    export const setSortBy = sortBy => dispatch => {
        return dispatch({
          type: SET_SORT_BY,
          payload: sortBy,
        });
      };