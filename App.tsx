import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { homeStyle } from './src/styles/globals';

import { 
  DarkProvider,
  useDark
} from './src/contexts/darkTheme';

import { 
  Header,
  Input
} from './src/components';

export default function App() {
  let { dark, onChangeDark } = useDark();
  
  return (
    <DarkProvider>
      <SafeAreaView style={homeStyle.container}>
        <StatusBar style="light" />
        <Header
          title="Calculadora de Juros Simples"
        />
      </SafeAreaView>
    </DarkProvider>
  );
}