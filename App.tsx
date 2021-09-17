import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';

import { homeStyle } from './src/styles/globals';

export default function App() {
  return (
    <SafeAreaView style={homeStyle.container}>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}