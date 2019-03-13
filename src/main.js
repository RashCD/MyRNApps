import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from './actions';
import MainNav from './components/navigator/main';
import AuthNav from './components/navigator/auth';

class main extends Component {
  render() {
    const { accessToken, isStoreRehydrated } = this.props;

    if (isStoreRehydrated) {
      if (accessToken) {
        return <MainNav />;
      }

      return <AuthNav />;
    }
    return <Text> Loading... </Text>;
  }
}

main.propTypes = {
  accessToken: PropTypes.string.isRequired,
  isStoreRehydrated: PropTypes.bool.isRequired,
};

const mapStateToProps = store => ({
  accessToken: Actions.getAccessToken(store),
  isStoreRehydrated: Actions.isStoreRehydrated(store),
});

export default connect(mapStateToProps)(main);
