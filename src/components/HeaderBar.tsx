import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import GradientBgIcon from './GradientBgIcon';
import {COLORS, FONTFAMILY, FONTSIZE} from '../shared/theme';
import ProfilePic from './ProfilePic';

interface HeaderBarProps {
  title?: string;
}
const HeaderBar = ({title}: HeaderBarProps) => {
  return (
    <View style={styles.HeaderContainer}>
      <GradientBgIcon
        name="menu"
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_16}
      />
      <Text style={styles.HeaderText}>{title}</Text>
      <ProfilePic />
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
