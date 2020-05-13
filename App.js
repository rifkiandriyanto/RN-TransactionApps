import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import store from './src/components/redux/store';
import Transaction from './src/components/screens/transaction';
import DetailTransaction from './src/components/screens/detailTransaction';

const AppNavigator = createStackNavigator({
  Home: Transaction,
  Detail: DetailTransaction,
});

const AppContainer = createAppContainer(AppNavigator);

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
export default App;
