import books from '../src/api/books';

test('it returns default no. of books', async () => {
  const response = await books.post('/books');
  expect(response.data).toBeDefined();
});
