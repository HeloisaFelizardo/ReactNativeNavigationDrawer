import React from 'react';
import { Text, View, Image } from 'react-native';

import pokemon from '../assets/charmander.png';
import estilo from './estilo';

export default function TelaPokemon3 () {
  return (
    <View style={estilo.container}>
      <Image source={pokemon} style={estilo.capa} resizeMode="contain"/>
      
      <Text style={estilo.titulo}>
        Charmander
      </Text>

      <Text style={estilo.texto}>
        Pokémon tipo fogo. 
      </Text>
    </View>
  );
}