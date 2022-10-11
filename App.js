/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {Node} from 'react';
import React from 'react';
import {SafeAreaView, Text, Button, NativeModules} from 'react-native';
const {HelloPT} = NativeModules;

const App: () => Node = () => {
  const callNativeModuleFn = () => {
    HelloPT.sayHello('Aman', (err, msg) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(msg);
    });
  };

  return (
    <SafeAreaView>
      <Text>Welcome to my chanel</Text>
      <Button onPress={callNativeModuleFn} title="call native function" />

      <Text>Credit Card Scanner</Text>
    </SafeAreaView>
  );
};

export default App;
