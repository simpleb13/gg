import { fromJS } from 'immutable';

import { actions } from '../actions';

const getInitialState = () =>
  fromJS({
    books: [],
    isLoading: true,
    page: 0,
    count: 0,
    filter: '',
  });

export default (state = getInitialState(), action = { type: null }) => {
  switch (action.type) {
    case actions.SET_LOADING:
      return state.set('isLoading', action.loading);
    case actions.SET_BOOKS:
      const result = fromJS(action.books);
      const books = result.get('books');
      return state.set('books', books).set('count', result.get('count'));
    case actions.SET_FILTER:
      return state.set('filter', action.filter);
    default:
      return state;
  }
};
