import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'semantic-ui-react';

class Profile extends React.Component {
  render() {
    return(
      <div>
        <h2>{this.props.user.name}</h2>
        <Image src={this.props.user.image} />
        <h4>{this.props.user.nickname}</h4>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return { user: state.user };
}

export default connect(mapStateToProps)(Profile);
