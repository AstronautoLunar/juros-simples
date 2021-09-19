import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const Main:any = Animatable.createAnimatableComponent(SafeAreaView);

import { homeStyle } from './src/styles/globals';

import { 
  Header,
  Input
} from './src/components';

export default function App() {
  let [ style, setStyle ] = useState(false);
  
  let [ total, setTotal ] = useState("Resultado");
  let [ inputs, setInputs ] = useState({
    capital: 0,
    taxa: 0,
    tempo: 0
  })

  function onChangeValue(type:string, value:number) {
    switch(type) {
      case "capital":
        setInputs({ ...inputs, capital: value });
        break;
      case "taxa":
        setInputs({ ...inputs, taxa: value/100 });
        break;
      case "tempo":
        setInputs({ ...inputs, tempo: value/12 });
        break;
      default:
    }
  }
  
  function calculate() {
    setTotal(String(inputs.capital * inputs.taxa * inputs.tempo))
  }

  function onChangeStorage() {
    setStyle(!style);
  }

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
          press={onChangeStorage}
        />
        <ScrollView
          contentContainerStyle={homeStyle.scroll}
        >

          <Input
            label="Capital R$"
            dark={style}
            onChangeText={text => onChangeValue("capital", Number(text))}
            keyboardType="numeric"
            />
          <Input
            label="Taxa %"
            dark={style}
            onChangeText={text => onChangeValue("taxa", Number(text))}
            keyboardType="numeric"
            />
          <Input
            label="Tempo (meses)"
            dark={style}
            onChangeText={text => onChangeValue("tempo", Number(text))}
            keyboardType="numeric"
            />

          <TouchableOpacity
            onPress={calculate}
          >
            <View
              style={homeStyle.buttonCalc}
            >
              <Text style={homeStyle.textButton}>
                Calcular
              </Text>
            </View>
          </TouchableOpacity>

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
            { 
              total 
              ?
              `${total} reais`
              :
              "Resultado" 
            }
          </Animatable.Text>
        </ScrollView>
      </Main>
    </>
  );
}