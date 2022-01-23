import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Details from './screens/details';

const getFonts = () => Font.loadAsync({
  'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
  'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
});

const Stack = createNativeStackNavigator();



export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);  

  if(fontsLoaded){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home'
          component={Home}
          options={{
            headerShown:false,
          }}
          />
          <Stack.Screen name='Details'
          component={Details}
          options={{ 
            headerShown:false,
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
    <AppLoading
    startAsync={getFonts}
    onFinish={() => setFontsLoaded(true)}
    onError={() => console.log('error')}
    />
    )
  }

}

const styles = StyleSheet.create({
  
  
});
