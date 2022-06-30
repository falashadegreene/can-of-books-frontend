import React from 'react';
import { ListGroup, Container, Button } from 'react-bootstrap';
import UpdateBooks from './UpdateBooks';

class Books extends React.Component {
  render() {
    let books = this.props.books.map(book => (
      <Book // why are we doing it this way
        book={book}
        key={book._id}
        deleteBooks={this.props.deleteBooks}
        updateBooks={this.props.updateBooks}
      />
    ))
    return (
      <Container>
        <ListGroup>
          {books}
        </ListGroup>
      </Container>
    )
  }
}

class Book extends Component { // this is what she has in the demo code but ... err... I'm not actually sure what's happening here.  
  constructor(props) {
    super(props);
    this.state = {
      showUpdateForm: false
    }
  }

  render() {
    return (
      <>
        <ListGroup.Item>
          {this.props.book.title}
          <div>
            <Button 
              variant="info" 
              onClick={() => this.props.deleteBooks(this.props.book._id)}>
              Delete Book
            </Button>
            <Button>
              onClick={() => this.setState({ showUpdateForm: true })}
              Update Bookshelf
            </Button>
          </div>
        </ListGroup.Item>
        {
          this.state.showUpdateForm &&
          <UpdateBooks
            book={this.prop.book}
            updateBooks={this.props.updateBooks}
          />
        }
      </>
    )
  }
}

export default Books;