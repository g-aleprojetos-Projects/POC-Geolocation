/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {enableLatestRenderer} from 'react-native-maps';
import {Main} from './src/screen/main';

const App = () => {
  enableLatestRenderer();
  return (
    <SafeAreaView testID="test_app">
      <Main />
    </SafeAreaView>
  );
};

export default App;
