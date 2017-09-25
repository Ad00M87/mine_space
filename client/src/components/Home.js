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
            <Grid.Column
              width={4}
              style={{
                backgroundColor: 'rgb(71, 163, 130)',
                height: '100vh',
                borderRadius: '15px',
              }}
            >
              <Profile />
            </Grid.Column>
            <Grid.Column
              width={8}
              style={{
                backgroundColor: 'rgb(71, 190, 130)',
                borderRadius: '15px',
              }}
            >
              <PostList />
            </Grid.Column>
            <Grid.Column
              width={4}
              style={{
                backgroundColor: 'rgb(71, 163, 130)',
                height: '100vh',
                borderRadius: '15px',
              }}
            >
              <PostForm />
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Home;
