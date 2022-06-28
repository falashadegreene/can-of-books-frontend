import axios from 'axios';
import React from 'react';
//import { Carousel, Image } from 'react-bootstrap';

let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  getBooks = async () => {
    console.log('are you there?');
    try {
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      console.log(results.data);
      this.setState({
        books: results.data
      })
    } catch (error) {
      console.log('oops, there is an error:', error.response.data)
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount() {
    this.getBooks();
  }

  render() {
    console.log(this.state.books);

    return (
      <>

        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? this.state.books.map(book => (<>
          <ul key={book._id}>Title: {book.title}</ul>
          <ul key={book._id}>Description: {book.description}</ul>
          <ul key={book._id}>Status: {book.status}</ul>
        </>
        )) : (<p>Book Carousel coming soon</p>)}
      </>
    )
  }
}

export default BestBooks;

