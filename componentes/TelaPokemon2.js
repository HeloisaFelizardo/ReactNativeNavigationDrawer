import React from 'react';
import { Text, View, Image } from 'react-native';

import pokemon from '../assets/squirtle.png';
import estilo from './estilo';

export default function TelaPokemon2 () {
  return (
    <View style={estilo.container}>
      <Image source={pokemon} style={estilo.capa} resizeMode="contain"/>
      
      <Text style={estilo.titulo}>
        Squirtle
      </Text>

      <Text style={estilo.texto}>
        Pokémon tipo água. 
      </Text>
    </View>
  );
}