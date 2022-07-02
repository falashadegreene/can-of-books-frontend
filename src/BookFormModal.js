import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BookFormModal extends React.Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.showModal}
          onHide={this.props.handleHideModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add a new book</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form onSubmit={this.props.handleBookSubmit}>
              <Form.Group>
                <Form.Label controlId="title">Title</Form.Label>
                <Form.Control placeholder="Enter Book Title" type="text" />
              </Form.Group>

              <Form.Group controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control placeholder="Enter author" type="text" />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder="Say something about this book" type="text" />
              </Form.Group>

              <Form.Group controlId="status">
                <Form.Check type="checkbox" label="Have you read this book?" />
              </Form.Group>

              <Button type="submit">Submit book</Button>

            </Form>
          </Modal.Body>
        </Modal>



      </>
    )
  }

}
export default BookFormModal; 