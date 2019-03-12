import React, { Component } from 'react';
import { View, Alert, Button } from 'react-native';
import PropTypes from 'prop-types';

export default class LoginView extends Component {
  render() {
    const { login } = this.props;
    return (
      <View>
        <Button title="Sign Up with Facebook" onPress={login} />
      </View>
    );
  }
}

LoginView.propTypes = {
  login: PropTypes.func,
};

LoginView.defaultProps = {
  login: null,
};
