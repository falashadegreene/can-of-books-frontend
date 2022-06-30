import React from 'react';
// import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class AddBook extends React.Component {
  render() {
    return (
      <>
        <Form onSubmit={this.handleBookSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control name="title" type="text" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Author</Form.Label>
            <Form.Control name="author" type="text" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control name="description" type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Check name="status" type="checkbox" label="completed" />
          </Form.Group>
          <Button onClick={this.handleDelete}>Add Book</Button>
        </Form>
      </>
    )
  }

}
export default AddBook; 