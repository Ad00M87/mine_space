import React from 'react';
import { Container } from 'semantic-ui-react';
import Post from './Post';

class Single extends React.Component {
  render() {
    return(
      <Container>
        <Post />
      </Container>
    )
  }
}

export default Single;
