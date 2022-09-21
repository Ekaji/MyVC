import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ImageSet } from '../../config/Constant';
import { styles } from './style';

const HeaderBar = ({ hasBackButton, headerText, onLeftIconPress }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      {hasBackButton && (
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={ImageSet.back_icon}
              style={styles.backButton}
              resSizeMode="contain"
            />
          </TouchableOpacity>

          {headerText && (
            <View style={styles.backButtonTextContainer}>
              <Text style={styles.backButtonText}>{headerText}</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default HeaderBar;
