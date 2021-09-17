import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';

import { homeStyle } from './src/styles/globals';

import { 
  Header,
  Input
} from './src/components';

export default function App() {
  return (
    <SafeAreaView style={homeStyle.container}>
      <StatusBar style="light" />
      <Header
        title="Calculadora de Juros Simples"
      />
    </SafeAreaView>
  );
}