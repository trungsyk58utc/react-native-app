import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, SPACING} from '../shared/theme';

const ProfilePic = () => {
  return (
    <View style={styles.ImageContainer}>
      <Image
        source={require('../assets/app_images/avatar.png')}
        style={styles.ImageStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ImageContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  ImageStyle: {
    width: 36,
    height: 36,
  },
});

export default ProfilePic;
