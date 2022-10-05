import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React, { useEffect } from 'react';
import { Colors, SCREEN_WIDTH } from '../../../config/Constant';
import {
  MyVcBaseTextField,
  MyVCDropDown,
} from '../../../components/TextFields';
import { useState } from 'react';
import { HeaderBar } from '../../../components/Header';
import { CurvedButton } from '../../../components/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile, fetchUser } from '../../../../FirebaseFireStoreDB';
import { fetchUserProfile } from '../../../store/Slices/auth';

export default function EditProfile({ navigation, route }) {
  const userId = useSelector((state) => state.auth?.id);

  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state.auth?.userProfile);

  const [firstName, setFirstName] = useState(userProfile?.firstName || '');
  const [lastName, setLastName] = useState(userProfile?.lastName || '');
  const [email, setEmail] = useState(userProfile?.email || '');
  const [phone, setPhone] = useState(userProfile?.phone || '');
  const [country, setCountry] = useState(userProfile?.country || '');

  const onComplete = (selectedCountry) => {
    setCountry(selectedCountry);
  };

  useEffect(() => {
    onComplete(userProfile?.country);
  }, []);

  const updateProfile = async () => {
    const data = {
      firstName,
      lastName,
      phone,
      country,
    };
    const res = updateUserProfile(userId, data);

    if (res) {
      navigation.goBack();
      const res = await fetchUser(userId);
      dispatch(fetchUserProfile(res));
    }
  };

  return (
    <View style={styles.container}>
      <HeaderBar hasBackButton headerText={'Edit Profile'} />
      <View style={styles.mainBodyContainer}>
        <MyVcBaseTextField
          headerText={'First Name'}
          placeholder={'Enter First Name'}
          moreViewStyles={styles.textInput}
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <MyVcBaseTextField
          headerText={'Last Name'}
          placeholder={'Enter Last Name'}
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          moreViewStyles={styles.textInput}
        />
        <MyVcBaseTextField
          headerText={'Email'}
          value={email}
          editable={false}
          placeholder={'Enter Email'}
          moreViewStyles={styles.textInput}
        />
        <MyVcBaseTextField
          headerText={'Phone Number'}
          placeholder={'Enter Phone Number'}
          moreViewStyles={styles.textInput}
          onChangeText={(text) => setPhone(text)}
          value={phone}
        />
        <MyVCDropDown
          moreViewStyles={styles.textInput}
          headerText={'Your Country'}
          value={userProfile?.country || country}
          onComplete={onComplete}
        />
      </View>

      <View
        style={{
          flex: 0.2,
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: '100%',
          marginTop: 100,
        }}
      >
        <CurvedButton
          text={'Edit User Profile'}
          onPress={() => updateProfile()}
          moreStyles={styles.button}
          outline={true}
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
