import React from 'react';
import axios from 'axios';
import { Carousel, Button, Image } from 'react-bootstrap';
import BookFormModal from './BookFormModal.js';
import UpdateBooks from './UpdateBooks.js';

const SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      bookToUpdate: [],
      showModal: false,
      showUpdateModal: false,
    }
  }

  // ------------- MODAL -------------
  handleShowModal = () => {
    this.setState({
      showModal: true
    })
  }

  handleHideModal = () => {
    this.setState({
      showModal: false
    })
  }

  // ---------- GET ------------
  getBooks = async () => {
    console.log('are you there?');
    try {
      let url = `${SERVER}/books`;
      let results = await axios.get(`${SERVER}/books`);
      // console.log(results.data);
      this.setState({
        books: results.data
      })
    } catch (error) {
      console.log('oops, there is an error:', error.response.data);
    }
  }

  // ---------- POST ------------
  postBooks = async (newBookObj) => {
    try {
      let url = `${SERVER}/books`;
      let createdBook = await axios.post(url, newBookObj);
      // console.log(newBookObj.data);
      this.setState({
        books: [...this.state.books, createdBook.data]
      });
    } catch (error) {
      console.log('oops, there is an error:', error.response.data)
    }
  }

  // ---------- DELETE ------------
  deleteBooks = async (id) => {
    try {
      let url = `${SERVER}/books/${id}`;
      await axios.delete(url);
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: updatedBooks,
      });
    } catch (error) {
      console.log('oops, there is an error:', error.response.data);
    }
  }

  // ------------ UPDATE ------------
  updateBooks = async (bookToUpdate) => {
    try {
      let url = `${SERVER}/books/${bookToUpdate._id}`;
      let updatedBook = await axios.put(url, bookToUpdate);
      let updatedBookArr = this.state.books.map(existingBook => {
        return existingBook._id === bookToUpdate._id
          ? updatedBook.data
          : existingBook
      });
      this.setState({
        books: updatedBookArr
      });
    } catch (error) {
      console.log('oops, an error', error.response.data);
    }
  }

  // ------------- HANDLER ---------------
  handleBookSubmit = (e) => {
    e.preventDefault();
    let newBook = {
      title: e.target.title.value,
      author: e.target.author.value,
      description: e.target.description.value,
      status: e.target.status.value,
    }
    // console.log(newBook);
    this.postBooks(newBook);
  }

  componentDidMount() {
    this.getBooks();
  }


  // ---------------- RENDER RETURN -----------------
  render() {
    return (
      <>
        {this.state.books.length ? (
          <div>
            <Carousel>
              {this.books.map((book, idx) =>
              (
                <Carousel.Item key={idx}>
                  <Image
                    className='BookOne'
                    src="https://images-na.ssl-images-amazon.com/images/I/51gN4UHWDrL._SX322_BO1,204,203,200_.jpg"
                    alt='cover page'
                  />
                  <h3>{book.title}</h3>
                  <h4>{book.author}</h4>
                  <h5>{book.description}</h5>
                  <p>{book.status}</p>
                  <Carousel.Caption>

                    <Button
                      onClick={() => this.props.deleteBook(book._id)}
                      type="submit"
                      variant="secondary"
                    >
                      Delete this book</Button>
                    <Button
                      onClick={this.handleShowModal}

                      type="submit"
                      variant="primary"
                    >Update this book</Button>

                  </Carousel.Caption>
                  <BookFormModal
                    showModal={this.state.showModal}
                    handleHideModal={this.handleHideModal}
                    handleBookSubmit={this.handleBookSubmit}
                  />
                  <UpdateBooks
                    showModal={this.state.showModal}
                    handleHideModal={this.handleHideModal}
                    book={book}
                    updateBooks={this.updateBooks}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        ) : (
          <h3>Sorry, no books</h3>
        )}
      </>
    )
  }
}

export default BestBooks;