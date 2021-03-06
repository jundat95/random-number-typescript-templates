import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './stores/index';
import HomeComponent from './features/home/home.component';

export interface AppProps {
}

export interface AppState {
}

export default class AppComponent extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
  }

  public render() {
    return (
      <Provider store={store}>
        <HomeComponent/>
      </Provider>
    );
  }
}
