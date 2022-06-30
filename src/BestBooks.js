import React from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import AddBook from './AddBook.js';
import UpdateBooks from './UpdateBooks.js';
import Books from './Books.js';

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

  // ---------- GET ------------
  getBooks = async () => {
    console.log('are you there?');
    try {
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

  // ------------- HANDLER -------------
  handleBookSubmit = (e) => {
    e.preventDefault();
    let newBook = {
      title: e.target.title.value,
      author: e.target.author.value,
      description: e.target.description.value,
      status: e.target.status.value,
    }
    console.log(newBook);
    this.postBooks(newBook);
  }

  // handleDelete ?
  // handleUpdate ?

  componentDidMount() {
    this.getBooks();
  }

  // ------------- MODAL -------------
  showModal = () => {
    this.setState({
      showModal: true
    })
  }

  handleHideModal = () => {
    this.setState({
      showModal: false
    })
  }

  // ---------------- RENDER RETURN -----------------
  render() {
    //console.log(this.state.books);

    return (
      <>
        <header>
          <h1>Books! Books! Books!</h1>
        </header>
        {
          this.state.books.length > 0 &&
          <>
            <UpdateBooks
              books={this.deleteBooks}
              updateBooks={this.updateBooks}
            />
          </>
        }

        <Modal
          show={this.state.showModal}
          onHide={this.handleHideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddBook
              handleBookSubmit={this.handleBookSubmit}
              handleDelete={this.handleDelete}
              // handleHideModal={this.handleHideModal}
            />
          </Modal.Body>
        </Modal>

        <Books
          updateBooks={this.updateBooks}
          bookToUpdate={this.state.bookToUpdate}
          deleteBooks={this.deleteBooks}
        />
      </>
    )
  }
}

export default BestBooks;

// {this.state.books.length ? this.state.books.map(book => (<>
//   <ul key={book._id}>Title: {book.title}</ul>
//   <ul key={book._id}>Description: {book.description}</ul>
//   <ul key={book._id}>Status: {book.status}</ul>
// </>
// )