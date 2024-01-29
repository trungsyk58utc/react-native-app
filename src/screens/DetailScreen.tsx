import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';

const DetailScreen = ({navigation}: any) => {
  return (
    <View className="flex-1 bg-slate-900 p-6 pt-14 ">
      <Text className="text-white">DetailScreen</Text>
      <Button title="Button" />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text className="text-white">Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;
