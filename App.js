import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TelaInicial from './componentes/TelaInicial';
import TelaPokemon1 from './componentes/TelaPokemon1';
import TelaPokemon2 from './componentes/TelaPokemon2';
import TelaPokemon3 from './componentes/TelaPokemon3';

const Drawer = createDrawerNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component = { TelaInicial } />
        <Drawer.Screen name="Pokémon 1" component = { TelaPokemon1 } />
        <Drawer.Screen name="Pokémon 2" component = { TelaPokemon2 } />
        <Drawer.Screen name="Pokémon 3" component = { TelaPokemon3 } />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
