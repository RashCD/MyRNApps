import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from '../../../actions';

class LoginView extends Component {
  render() {
    const { fetchFBAuth } = this.props;
    return (
      <View style={styles.center}>
        <Button title="Sign Up with Facebook" onPress={fetchFBAuth} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

LoginView.propTypes = {
  fetchFBAuth: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetchFBAuth: Actions.fetchFBAuth,
};

export default connect(
  null,
  mapDispatchToProps
)(LoginView);
