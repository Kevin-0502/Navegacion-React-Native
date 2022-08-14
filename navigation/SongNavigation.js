import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//importando dependencias para bottomNavigator
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//importando screens
import List from '../screens/List';
import Details from '../screens/Details';

const Stack=createNativeStackNavigator();

export default function SongNavigation() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name='List' component={List}/>
        <Stack.Screen name='Details' component={Details}/>
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});