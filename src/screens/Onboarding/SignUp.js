import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CurvedButton } from '../../components/Buttons';
import {
  MyVcBaseTextField,
  MyVCDropDown,
  MyVcIconTextField,
} from '../../components/TextFields';
import { H1, H3, SmallLightGrayText } from '../../components/Texts';
import { Colors, ImageSet, SCREEN_WIDTH } from '../../config/Constant';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useRef } from 'react';
import { useState } from 'react';
import { bottomPopUpMessage } from '../../helpers/helpers';
import { registerWithGoogle } from '../../../FirebaseFireStoreDB';
import { setUserid, signIn } from '../../store/Slices/auth';
import { useDispatch } from 'react-redux';
import uuid from 'react-native-uuid';

export default function SignUp({ navigation, route }) {
  const method = route.params?.method;
  const userData = route.params?.userData;

  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(userData?.given_name || '');
  const [lastName, setLastName] = useState(userData?.family_name || '');
  const [email, setEmail] = useState(userData?.email || '');
  const [phone, setPhone] = useState('');

  const goToPhoneNumberConfirmation = () => {
    navigation.navigate('AuthenticationConfirmation');
  };

  const [country, setCountry] = useState('Country');

  const onComplete = (selectedCountry) => {
    setCountry(selectedCountry);
  };

  const signInWithGoogle = async () => {
    if (!phone) {
      return bottomPopUpMessage('Phone is required');
    }
    if (!country) {
      return bottomPopUpMessage('Country is required');
    }

    const data = {
      email: userData?.email,
      firstName: userData?.given_name,
      lastName: userData?.family_name,
      phone: phone,
      country: country,
      city: country,
      signUpType: 'google',
      createdAt: new Date(),
      id: uuid.v4(),
    };

    await registerWithGoogle(data);
    dispatch(signIn());
    dispatch(setUserid(data?.id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <H1
          content={'Welcome!'}
          moreStyles={{
            marginTop: 32,
          }}
        />
        <H3
          content={
            'Automate your every day wardrobe and always be ready for any event!'
          }
          moreStyles={{
            marginTop: 16,
            textAlign: 'center',
          }}
        />
        <SmallLightGrayText
          content={'Signing-up with Phone number'}
          moreStyles={{
            marginTop: 16,
          }}
        />
      </View>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          width: '100%',
        }}
      >
        <MyVcBaseTextField
          headerText={'First Name'}
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          placeholder={'Enter First Name'}
          moreViewStyles={styles.inputText}
        />
        <MyVcBaseTextField
          headerText={'Last Name'}
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          placeholder={'Enter Last Name'}
          moreViewStyles={styles.inputText}
        />
        <MyVcBaseTextField
          headerText={'Email'}
          value={email}
          editable={method === 'google' ? false : true}
          onChangeText={(text) => setEmail(text)}
          placeholder={'Enter Email'}
          moreViewStyles={styles.inputText}
        />
        <MyVcBaseTextField
          headerText={'Phone Number'}
          onChangeText={(text) => setPhone(text)}
          placeholder={'Enter Phone Number'}
          moreViewStyles={styles.inputText}
        />
        <MyVCDropDown
          headerText={'Your Country'}
          onComplete={onComplete}
          moreViewStyles={styles.inputText}
        />
        {method === 'google' ? null : (
          <>
            <MyVcIconTextField
              iconImageName={ImageSet.eyeClose}
              headerText={'Password'}
              placeholder={'Enter Password'}
              onTapIcon={() => console.log('tapping icon')}
              moreViewStyles={styles.inputText}
              secureTextEntry={true}
            />
            <MyVcIconTextField
              iconImageName={ImageSet.eyeClose}
              headerText={'Confirm Password'}
              placeholder={'Enter Password'}
              onTapIcon={() => console.log('tapping icon')}
              moreViewStyles={styles.inputText}
              secureTextEntry={true}
            />
          </>
        )}
      </KeyboardAwareScrollView>
      <CurvedButton
        text={method === 'google' ? 'Sign in' : 'Next'}
        onPress={() => {
          method === 'google'
            ? signInWithGoogle()
            : goToPhoneNumberConfirmation();
        }}
        moreStyles={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  TextFieldsContainer: {
    alignItems: 'center',

    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 60,
    backgroundColor: Colors.black,
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  inputText: {
    width: SCREEN_WIDTH - 32,
    marginBottom: 20,
  },
  button: {
    marginVertical: 8,
    width: '90%',
    height: 64,
    borderRadius: 32,
  },
});
