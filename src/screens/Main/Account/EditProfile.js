import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import { Colors, SCREEN_WIDTH } from '../../../config/Constant';
import {
  MyVcBaseTextField,
  MyVCDropDown,
} from '../../../components/TextFields';
import { useState } from 'react';
import { HeaderBar } from '../../../components/Header';

export default function EditProfile() {
  const [country, setCountry] = useState('');

  const onComplete = (selectedCountry) => {
    setCountry(selectedCountry);
  };

  return (
    <View style={styles.container}>
      <HeaderBar hasBackButton headerText={'Edit Profile'} />
      <View style={styles.mainBodyContainer}>
        <MyVcBaseTextField
          headerText={'First Name'}
          placeholder={'Enter First Name'}
          moreViewStyles={styles.textInput}
        />
        <MyVcBaseTextField
          headerText={'Last Name'}
          placeholder={'Enter Last Name'}
          moreViewStyles={styles.textInput}
        />
        <MyVcBaseTextField
          headerText={'Email'}
          placeholder={'Enter Email'}
          moreViewStyles={styles.textInput}
        />
        <MyVcBaseTextField
          headerText={'Phone Number'}
          placeholder={'Enter Phone Number'}
          moreViewStyles={styles.textInput}
        />
        <MyVCDropDown
          moreViewStyles={styles.textInput}
          headerText={'Your Country'}
          onComplete={onComplete}
        />
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
  mainBodyContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: SCREEN_WIDTH - 32,
    marginBottom: 20,
  },
});
