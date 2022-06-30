import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';


class UpdateBooks extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let bookToUpdate = {
      title: e.target.title.value || this.props.book.title,
      description: e.target.description.value || this.props.book.description,
      status: e.target.status.value || this.props.book.status,
      _id: this.props.book._id,
      __v: this.props.book.__v
    }
    this.props.updateBooks(bookToUpdate);
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>

          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control name="title" type="text" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control name="description" type="text" />
          </Form.Group>

          <Form.Group>
            <Form.Check name="hasRead" type="checkbox" label="has-read" />
          </Form.Group>

          <Button type="submit">Update</Button>
        </Form>
      </Container>
    )
  }
}
export default UpdateBooks; 