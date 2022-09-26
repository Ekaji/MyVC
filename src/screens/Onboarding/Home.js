import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Text } from 'react-native';
import { CurvedButton } from '../../components/Buttons';
import { H1, H3, SmallLightGrayText } from '../../components/Texts';
import { Colors, ImageSet } from '../../config/Constant';
import { bottomPopUpMessage } from '../../helpers/helpers';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as AppleAuthentication from 'expo-apple-authentication';

WebBrowser.maybeCompleteAuthSession();

export default function Home({ navigation }) {
  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };
  const goToMain = () => {};

  const [request, response, googlePromptAsync] = Google.useAuthRequest({
    expoClientId:
      '658461813677-e40dlenf6j6jnj9kk3kombr711h71o45.apps.googleusercontent.com',
    iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  });

  const googleLogin = async () => {
    const response = await googlePromptAsync();
    console.log(response);
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
        console.log(identityToken);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {});
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
