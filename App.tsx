import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Main:any = Animatable.createAnimatableComponent(SafeAreaView);

import { 
  homeStyle, 
  colors 
} from './src/styles/globals';

import { 
  Header,
  Input
} from './src/components';

export default function App() {
  let [ style, setStyle ] = useState(false);
  let [ total, setTotal ] = useState("Resultado");

  return (
    <>
      <StatusBar style="light" />
      <Main
        transition="backgroundColor"
        duration={200} 
        style={
          style 
          ? 
          homeStyle.containerLight
          : 
          homeStyle.containerDark 
        }
      >
        <Header
          title="Calculadora de Juros Simples"
          value={ style }
          press={ () => setStyle(!style) }
        />
        <Input
          label="Capital"
          dark={style}
        />
        <Input
          label="Taxa"
          dark={style}
        />
        <Input
          label="Tempo"
          dark={style}
        />
        <Animatable.Text
          transition="color"
          duration={200}
          style={[
            homeStyle.text,
            style
            ?
            homeStyle.textDark
            :
            homeStyle.textLight
          ]}
        >
          { total }
        </Animatable.Text>
      </Main>
    </>
  );
}