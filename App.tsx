import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import PaymentScreen from './src/screens/PaymentScreen';
import Navigator from './src/navigator/Navigator';
import DetailScreen from './src/screens/DetailScreen';
import SplashScreen from 'react-native-splash-screen';

export type RootStackParamList = {
  navigator: undefined;
  detail: {
    index: any;
    id: any;
    type: any;
  };
  payment: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  useEffect(() => {
    const splashScreenTimeOut = setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    return () => clearTimeout(splashScreenTimeOut);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="navigator"
          component={Navigator}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="detail"
          component={DetailScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="payment"
          component={PaymentScreen}
          options={{animation: 'slide_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
