import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Colors } from '../../../config/Constant';
import Header from '../../../components/Header';
import { BackButton } from '../../../components/Buttons';
import { H1, H3 } from '../../../components/Texts';
import HeaderBar from '../../../shared/header';

export default function EditProfile() {
  return (
    <View style={styles.container}>
      <HeaderBar hasBackButton headerText={'Edit Profile'} />
      <View
        style={{
          flex: 0.8,
          marginLeft: 16,
        }}
      >
        <H1 content={'Reed Richards'} moreStyles={{ marginTop: 32 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  button: {
    marginVertical: 8,
    width: '90%',
    height: 64,
    borderRadius: 32,
  },
});
