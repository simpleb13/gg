import React from 'react';
import BookList from './BookList';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={BookList} />
        <Route path="/:page" component={BookList} />
      </Router>
    </>
  );
};

export default App;
