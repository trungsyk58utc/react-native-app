import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import HeaderBar from '../components/HeaderBar';

const LikeScreen = () => {
  return (
    <View className="flex-1 bg-slate-900 p-6 pt-14">
      <ScrollView>
        <HeaderBar title="Like" />
        <Text className="text-white">LikeScreen</Text>
      </ScrollView>
    </View>
  );
};

export default LikeScreen;
