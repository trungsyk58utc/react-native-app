import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import GradientBgIcon from './GradientBgIcon';
import {COLORS, FONTFAMILY, FONTSIZE} from '../shared/theme';
import ProfilePic from './ProfilePic';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useStore} from '../store/store';

interface HeaderBarProps {
  title?: string;
  navigation: any;
}
const HeaderBar = ({title, navigation}: HeaderBarProps) => {
  const setLogin = useStore((state: any) => state.setLogin);
  const removeAsyncStorageData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
      setLogin(false);
      navigation.reset({
        index: 0, // chỉ số của màn hình mà bạn muốn hiển thị
        routes: [{name: 'login'}], // danh sách các màn hình bạn muốn hiển thị
      });
    } catch (error) {
      //log
    }
  };

  return (
    <View style={styles.HeaderContainer}>
      <GradientBgIcon
        name="menu"
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_16}
      />
      <Text style={styles.HeaderText}>{title}</Text>
      <TouchableOpacity onPress={() => removeAsyncStorageData()}>
        <ProfilePic />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});

export default HeaderBar;
