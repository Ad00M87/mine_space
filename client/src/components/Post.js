import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Post extends React.Component {

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
          <Link to={`/api/posts/${post.id}`}>Show Post</Link>
        </Card.Content>
      </Card>
    )
  }
}

export default Post;
