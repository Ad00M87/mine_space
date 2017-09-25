import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getPosts } from '../actions/posts';
import axios from 'axios';
import { setHeaders } from '../actions/headers';
import { connect } from 'react-redux';

class PostList extends React.Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get('/api/posts/')
      .then( res => {
        this.props.dispatch(setHeaders(res.headers))
        this.setState({ posts: res.data })
      })
  }

  render() {
    return(
      <Card.Group itemsPerRow={2}>
        { this.state.posts.map( post =>
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
            <Link to={`/api/posts/${post.id}`}>Show Post</Link>
          </Card.Content>
        </Card>
        )}
      </Card.Group>
    )
  }
}

export default connect()(PostList);
