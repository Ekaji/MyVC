import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CurvedButton } from '../../components/Buttons';
import { H1, H3, SmallLightGrayText } from '../../components/Texts';
import { Colors, ImageSet } from '../../config/Constant';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as AppleAuthentication from 'expo-apple-authentication';
import axios from 'axios';
import { loginWithGoogle } from '../../../FirebaseFireStoreDB';
import { useDispatch } from 'react-redux';
import { setUserid, signIn } from '../../store/Slices/auth';

WebBrowser.maybeCompleteAuthSession();

export default function Home({ navigation }) {
  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const [request, fullResult, googlePromptAsync] = Google.useAuthRequest({
    expoClientId:
      '658461813677-e40dlenf6j6jnj9kk3kombr711h71o45.apps.googleusercontent.com',
    iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
  });

  const googleLogin = async () => {
    const response = await googlePromptAsync();

    if (response?.type === 'success') {
      setLoading(true);

      const options = {
        headers: {
          Authorization: 'Bearer ' + response?.authentication?.accessToken,
        },
      };

      const getUserProfile = await axios.get(
        'https://www.googleapis.com/userinfo/v2/me',
        options
      );

      if (getUserProfile) {
        const userData = getUserProfile.data;

        const doesUserExist = await loginWithGoogle(userData?.email);
        if (doesUserExist) {
          dispatch(signIn());
          dispatch(setUserid(userData?.email));
        } else {
          navigation.navigate('SignUp', {
            method: 'google',
            userData,
          });
        }
        setLoading(false);
      }
    }
  };

  const appleLogin = async () => {
    try {
      const { identityToken } = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        ],
      });

      if (identityToken) {
        console.log(identityToken, 'token');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // retriveTestDataFromFireStore();
    // postTestData2ToFireStore();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <H1
          content={'Welcome!'}
          moreStyles={{
            marginTop: 80,
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
      </View>
      <View style={styles.bottomViewWithbuttons}>
        <SmallLightGrayText content={'Login/Sign-up easily with'} />

        <CurvedButton
          text={'Google'}
          onPress={() => {
            googleLogin();
          }}
          loading={loading}
          imageUrl={ImageSet.google_icon}
          moreStyles={styles.button}
        />

        <CurvedButton
          text={'iCloud'}
          onPress={() => {
            appleLogin();
          }}
          imageUrl={ImageSet.apple_icon}
          moreStyles={styles.button}
        />
        <CurvedButton
          text={'Phone Number'}
          onPress={() => {
            goToSignUp();
          }}
          imageUrl={ImageSet.phone_icon}
          moreStyles={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  bottomViewWithbuttons: {
    alignItems: 'center',
    flex: 0.7,
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 60,
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    flex: 0.3,
  },
  button: {
    marginVertical: 8,
    width: '90%',
    height: 64,
    borderRadius: 32,
  },
});
