import React from 'react';
import { Card, Image, Button, Form, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { deletePost, updatePost } from '../actions/posts';

class Post extends React.Component {
  state = { editing: false }

  toggleEdit = () => {
    this.setState({ editing: true })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  editingPost = (post) => {
    this.props.dispatch(updatePost(post));
    this.toggleEdit();
  }

  render() {
    // eslint-disable-next-line
    const { post } = this.props;
      return(
        <Card>
          <Image src={post.image} />
          <Card.Content>
            <Card.Header>
              {post.title}
            </Card.Header>
            <Card.Description>
              {post.body}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button
              fluid
              style={{ backgroundColor: 'rgb(125, 57, 153)'}}
            >Show Post</Button>
          </Card.Content>
          <Card.Content extra>
            <Modal
              style={{ backgroundColor: 'rgba(34, 167, 67, 0.68)'}}
              trigger={<Button
              fluid
              style={{ backgroundColor: 'rgb(223, 128, 16)'}}
              onClick={ () => this.toggleEdit()}
            >Edit Post</Button>}>
              <Modal.Content>
                <Form>
                  <Form.Input
                    placeholder='Title'
                    label='Title'
                    name='title'
                    value={post.title}
                    onChange={ (e) => this.handleChange(e)}
                  />
                  <Form.TextArea
                    placeholder='Tell us about it...'
                    label='Description'
                    name='body'
                    value={post.body}
                    onChange={ (e) => this.handleChange(e)}
                  />
                  <Form.Input
                    placeholder="Image URL"
                    label='Image'
                    name='image'
                    value={post.image}
                    onChange={ (e) => this.handleChange(e)}
                  />
                  <Form.Button onClick={ () => this.editingPost(post) }>Update Post</Form.Button>
                </Form>
              </Modal.Content>
            </Modal>
          </Card.Content>
          <Card.Content extra>
            <Button
              fluid
              style={{ backgroundColor: 'rgb(221, 58, 35)'}}
              onClick={ () => this.props.dispatch(deletePost(post.id))}>Delete Post</Button>
          </Card.Content>
        </Card>
      )
  }
}

export default Post;
