import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import './src/i18n/i18n';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <RootNavigator />
    </SafeAreaView>
  );
}
