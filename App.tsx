/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import PaymentScreen from './src/screens/PaymentScreen';
import Navigator from './src/navigator/Navigator';
import DetailScreen from './src/screens/DetailScreen';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './src/screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useStore} from './src/store/store';

export type RootStackParamList = {
  navigator: undefined;
  detail: {
    index: any;
    id: any;
    type: any;
  };
  payment: undefined;
  login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const [accessToken, setAccessToken] = useState<any>();
  const [loading, setLoading] = useState(false);
  const isLogin = useStore((state: any) => state.IsLogin);
  const setLogin = useStore((state: any) => state.setLogin);
  useEffect(() => {
    const splashScreenTimeOut = setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    return () => clearTimeout(splashScreenTimeOut);
  }, []);

  const getTokenData = async () => {
    try {
      const value = await AsyncStorage.getItem('@accessToken');
      setAccessToken(value);
      if (value) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    } catch (e) {
      // error reading value
    }
    setLoading(true);
  };

  useEffect(() => {
    getTokenData();
  }, []);

  return (
    <NavigationContainer>
      {loading && (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {!isLogin ? (
            <Stack.Screen name="login" component={LoginScreen} />
          ) : (
            <>
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
            </>
          )}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
