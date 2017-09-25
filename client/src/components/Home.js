import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import Profile from './Profile';
import PostList from './PostList';
import PostForm from './PostForm';

class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Mine-Space</Header>
        <Container>
          <Grid>
            <Grid.Column width={4}>
              <Profile />
            </Grid.Column>
            <Grid.Column width={8}>
              <PostList />
            </Grid.Column>
            <Grid.Column width={4}>
              <PostForm />
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Home;
