import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import React from 'react';
import {authenAPI} from '../api/authenAPI';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStore } from '../store/store';

interface TokenData {
  accessToken: string;
  refreshToken: string;
}

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'detail'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {username: '', password: ''},
  });
  const setLogin = useStore((state: any) => state.setLogin);

  const saveToken = async (data: TokenData) => {
    const {accessToken, refreshToken} = data;
    try {
      await AsyncStorage.multiSet([
        ['@accessToken', accessToken],
        ['@refreshToken', refreshToken],
      ]);
    } catch (e) {
      //log
    }
  };

  const login = async (formData: any) => {
    try {
      const tokenData = await authenAPI.login(formData);
      saveToken(tokenData);
      setLogin(true);
      navigation.navigate('navigator');
    } catch (error) {
      Alert.alert('Invalid username or password');
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-slate-900 p-6 pt-14">
      <Text className="text-white">LoginScreen</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View className="flex-row mt-6 rounded-2xl items-center bg-slate-800">
            <TextInput
              className="flex-1 h-12 text-white text-sm p-2 mb-1"
              placeholder="username"
              placeholderTextColor="#ccc"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="username"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View className="flex-row mt-6 rounded-2xl items-center bg-slate-800">
            <TextInput
              className="flex-1 h-12 text-white text-sm p-2 mb-1"
              placeholder="password"
              placeholderTextColor="#ccc"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          </View>
        )}
        name="password"
      />
      {errors.username && (
        <Text className="text-orange-500 mt-2">Username is required.</Text>
      )}
      {errors.password && (
        <Text className="text-orange-500 mt-2">Password is required.</Text>
      )}
      <TouchableOpacity onPress={handleSubmit(login)}>
        <View className="bg-orange-400 p-3 rounded-xl mt-2">
          <Text className="text-white">Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
