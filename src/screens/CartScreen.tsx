import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import HeaderBar from '../components/HeaderBar';

const CartScreen = () => {
  return (
    <View className="flex-1 bg-slate-900 p-6 pt-14">
      <ScrollView>
        <HeaderBar title="Cart" />
        <Text className="text-white">CartScreen</Text>
      </ScrollView>
    </View>
  );
};

export default CartScreen;
