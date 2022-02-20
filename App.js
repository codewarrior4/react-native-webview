
import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import WebView from 'react-native-webview';

const App = () => {  
  return (
      <WebView source={{uri:'https://joygiverscharity.com/'}} />
  );
};

export default App;
