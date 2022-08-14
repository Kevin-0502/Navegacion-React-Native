import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//importando dependencias para bottomNavigator
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//importando screens
import Home from './screens/Home';
import List from './screens/List';
import SongNavigation from './navigation/SongNavigation';

const Tab=createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Song' component={SongNavigation}/>
      </Tab.Navigator>
    </NavigationContainer>
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
