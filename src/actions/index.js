import books from '../api/books';

export const actions = {
  FETCH_BOOKS: 'books/fetch_books',
  SET_LOADING: 'books/set_loading',
  SET_BOOKS: 'books/set_books',
  SET_FILTER: 'books/set_filter',
};

export const fetchBooks = (page = 1, itemsPerPage = 20) => async (
  dispatch,
  getState
) => {
  dispatch(setLoading(true));

  const filter = getState().get('filter');
  const filters = filter ? [{ type: 'all', values: [filter] }] : [];

  const response = await books.post('/books', {
    page,
    itemsPerPage,
    filters,
  });

  dispatch({
    type: actions.SET_BOOKS,
    books: response.data,
    page,
    itemsPerPage,
    filters,
  });

  dispatch(setLoading(false));
};

export const setLoading = (loading) => ({
  type: actions.SET_LOADING,
  loading,
});

export const setFilters = (filter) => ({
  type: actions.SET_FILTER,
  filter,
});
