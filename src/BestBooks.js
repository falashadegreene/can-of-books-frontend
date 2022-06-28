import axios from 'axios';
import React from 'react';
//import Carousel from 'react-bootstrap/Carousel';

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
      let results = await axios.get(`${SERVER}/books`);
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
    /* TODO: render all the books in a Carousel */
    // let books = this.state.books.map(bookObj => (
    //   <p key={bookObj.title}>{bookObj.discription}</p>
    //))
    return (
      <>
       {/* <Carousel.Item>
         <Carousel.Caption>
          <h2>Hello!</h2>
         </Carousel.Caption>
         <img>
       </Carousel.Item> */}
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
