import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';


class UpdateBooks extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let bookToUpdate = {
      title: e.target.title.value || this.props.book.title,
      author: e.target.author.value || this.props.book.author,
      description: e.target.description.value || this.props.book.description,
      status: e.target.status.value || this.props.book.status,
      _id: this.props.book._id,
      __v: this.props.book.__v
    }
    this.props.updateBooks(bookToUpdate);
  }

  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.handleHideModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update a book</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label controlId="title">Title</Form.Label>
              <Form.Control placeholder="{this.props.book.title}" type="text" />
            </Form.Group>

            <Form.Group controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control placeholder="{this.props.book.author}" type="text" />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control placeholder="{this.props.book.description}" type="text" />
            </Form.Group>

            <Form.Group controlId="status">
              <Form.Check type="checkbox" label="Have you read this book?" />
            </Form.Group>

            <Button type="submit">Submit Update!</Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}
export default UpdateBooks; 