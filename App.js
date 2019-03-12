import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import Main from './src/main';

export default class App extends React.Component {
  componentWillMount() {
    const onComplete = () => {
      console.log('[Rehydrate] Complete');
    };
    const { store } = configureStore(onComplete);
    this.store = store;
  }

  render() {
    return (
      <Provider store={this.store}>
        <Main />
      </Provider>
    );
  }
}
