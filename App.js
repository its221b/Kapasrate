import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text as RNText,
} from 'react-native';
import {TextInput, Text} from 'react-native-paper';
import Header from './src/components/Header/Header';
import InputForm from './src/components/InputForm/InputForm';

const App = () => {
  useEffect(() => {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.style = {fontFamily: 'Nunito-Regular'};
    Text.defaultProps.allowFontScaling = false;
    RNText.defaultProps = RNText.defaultProps || {};
    RNText.defaultProps.style = {fontFamily: 'Nunito-Regular'};
    RNText.defaultProps.allowFontScaling = false;
    TextInput.defaultProps = TextInput.defaultProps || {};
    TextInput.defaultProps.style = {fontFamily: 'Nunito-Regular'};
    TextInput.defaultProps.allowFontScaling = false;
  }, []);
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="default" backgroundColor={'#A020F0'} />
      <Header title="KAPAS PRICE" />
      <InputForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
});

export default App;
