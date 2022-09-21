import React from 'react';
import { View, Text } from 'react-native';
import HeaderBar from '../../../../shared/header';
import { styles } from './style';

const ChangePassword = () => {
  return (
    <View style={styles.container}>
      <HeaderBar hasBackButton />
    </View>
  );
};

export default ChangePassword;
