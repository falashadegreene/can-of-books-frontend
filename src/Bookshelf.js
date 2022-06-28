import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Bookshelf extends React.Component {
  render() {
    let bookCarousel = this.props.books.map((book, index) => {
      return (
        <Carousel.Item key={index}>
          <img
          className="d-block"
          src={'./book1.png'}
          alt='test'
          />
          <Carousel.Caption >
            <p>title:{book.title}</p>
            <p>description: {book.description}</p>
            <p>status: {book.status}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    });
    return (
      <Carousel variant='dark'>
        {bookCarousel}
      </Carousel>
    );
  }
}

export default Bookshelf;