import React from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addPost } from '../actions/posts';

class PostForm extends React.Component {
  state = { title: '', description: '', image: '' }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  newPost = () => {
    this.props.dispatch(addPost(this.state));
    this.setState({ title: '', body: '', image: ''})
  }

  render() {
    return(
      <Form>
        <Form.Input
          placeholder='Title'
          label='Title'
          name='title'
          value={this.state.title}
          onChange={ (e) => this.handleChange(e)}
        />
        <Form.TextArea
          placeholder='Tell us about it...'
          label='Description'
          name='body'
          value={this.state.body}
          onChange={ (e) => this.handleChange(e)}
        />
        <Form.Input
          placeholder="Image URL"
          label='Image'
          name='image'
          value={this.state.image}
          onChange={ (e) => this.handleChange(e)}
        />
        <Form.Button onClick={this.newPost}>Add Post</Form.Button>
      </Form>
    )
  }
}

export default connect()(PostForm);
