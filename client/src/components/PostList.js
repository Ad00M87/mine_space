import React from 'react';
import { Card } from 'semantic-ui-react';
import axios from 'axios';
import Post from './Post'
import { setHeaders } from '../actions/headers';
import { connect } from 'react-redux';
// eslint-disable-next-line
import { getPosts } from '../actions/posts';


class PostList extends React.Component {
  state = { posts: [] }

  componentDidMount() {
    console.log('did mount');
    axios.get('/api/posts/')
      .then( res => {
        this.props.dispatch(setHeaders(res.headers))
        this.setState({ posts: res.data })
        console.log(res.data);
      })
  }

  render() {
      return(
        <Card.Group itemsPerRow={2}>
          { this.state.posts.map( (post, i) =>
            <Post {...this.props} key={i} i={i} post={post} />
          )}
        </Card.Group>
      )
  }
}

export default connect()(PostList);
