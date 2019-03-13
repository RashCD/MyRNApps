import React, { Component } from 'react';
import {
  Text,
  View,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from '../../../actions';

class MainView extends Component {
  render() {
    const PlatformContainer = Platform.OS === 'ios' ? SafeAreaView : View;
    const { clearAccessToken, fbAuth } = this.props;
    const fbName = fbAuth.name || 'user';

    return (
      <PlatformContainer style={styles.flex}>
        <View style={styles.center}>
          <Text style={{ flex: 0.25 }}> Hello {fbName}</Text>
          <TouchableOpacity onPress={clearAccessToken} style={styles.button}>
            <Text style={styles.textButton}> Sign Out </Text>
          </TouchableOpacity>
        </View>
      </PlatformContainer>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  textButton: {
    color: 'white',
    fontSize: 14,
  },
});

MainView.propTypes = {
  clearAccessToken: PropTypes.func.isRequired,
  fbAuth: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  clearAccessToken: Actions.clearAccessToken,
};

const mapStateToProps = store => ({
  fbAuth: Actions.getFBAuth(store).data,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView);
