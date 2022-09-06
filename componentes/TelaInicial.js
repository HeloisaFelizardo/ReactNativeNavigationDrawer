import React from 'react';
import { Text, View, Image } from 'react-native';

import capa from '../assets/capa.png';
import estilo from './estilo';

export default function TelaInicial () {
  return (
    <View style={estilo.container}>
      <Image source={capa} style={estilo.capa} resizeMode="contain"/>
      
      <Text style={estilo.titulo}>
        Conhecendo os 3 Pokémons iniciais da primeira temporada
      </Text>

      
      <Text style={estilo.texto}>
        Arraste o dedo da esquerda pra direita para abrir o menu lateral.
      </Text>
    </View>
  );
}