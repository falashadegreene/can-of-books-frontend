import { Component } from 'react';
import  ListGroup from 'react-bootstrap';

class Books extends Component {
  render() {
    return (
    <ListGroup>
    {this.props.books.length && this.props.books.map( book => (
      <ListGroup.Item key={book._id}>
      <Book key={book} onDelete={this.props.onDelete}/>
      </ListGroup.Item>
    ))}
    </ListGroup>
     
    )
  }
}

class Book extends Component {
  delete = () => {
    this.props.onDelete(this.props.info);
  }

  render() {
    console.log(this.props.book);
    return (
      <h3>{this.props.info.title} ({this.props.info.description}) <span onClick={this.delete}>[X]</span></h3>
    );
  }
}

export default Books; 