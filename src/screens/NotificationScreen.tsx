import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import HeaderBar from '../components/HeaderBar';

const NotificationScreen = () => {
  return (
    <View className="flex-1 bg-slate-900 p-6 pt-14">
      <ScrollView>
        <HeaderBar title="Notification" />
        <Text className="text-yellow-50">NotificationScreen</Text>
      </ScrollView>
    </View>
  );
};

export default NotificationScreen;
