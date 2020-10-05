import { Container } from '@material-ui/core';
import List from '@material-ui/core/List';
import React from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions';
import SearchBar from './SearchBar';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.pageId = this.props.match.params.page || 1;
  }

  componentDidMount() {
    this.props.fetchBooks(this.pageId);
  }

  renderList() {
    return this.props.books.map((book) => {
      return (
        <div className="item" key={book.get('id')}>
          <div>
            <h2>{book.get('book_title')}</h2>
            <p>{book.get('book_author')}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <Container>
        <SearchBar />
        <List>
          {!this.props.isLoading && this.props.books && this.renderList()}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.get('books'),
    isLoading: state.get('isLoading'),
  };
};

export default connect(mapStateToProps, { fetchBooks })(BookList);
