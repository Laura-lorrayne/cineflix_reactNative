import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './src/Tela1';
import Details from './src/Tela2';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={Search} options={{ title: 'Filmes' }} />
        <Stack.Screen name="Details" component={Details}options={{ title: 'Detalhes do Filme' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
