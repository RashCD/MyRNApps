import React, { Component } from 'react';
import { View, SafeAreaView, Platform, StyleSheet, Alert } from 'react-native';
import { Facebook } from 'expo';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginView from './components/LoginView';
import Actions from './actions';

class main extends Component {
  logInFB = async () => {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync('2275521712468554', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  render() {
    const PlatformContainer = Platform.OS === 'ios' ? SafeAreaView : View;
    const { fetchFBAuth } = this.props;
    return (
      <PlatformContainer style={styles.container}>
        <View style={styles.center}>
          <LoginView login={fetchFBAuth} />
        </View>
      </PlatformContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

main.propTypes = {
  fetchFBAuth: PropTypes.func.isRequired,
};

// const mapStateToProps = store => ({
//   getOrientation: Actions.getOrientation(store),
//   isLanguageSet: Actions.isLanguageSet(store),
// });

const mapDispatchToProps = {
  fetchFBAuth: Actions.fetchFBAuth,
};

export default connect(
  null,
  mapDispatchToProps
)(main);
