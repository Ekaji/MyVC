import { View, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import {
  BackButton,
  CurvedButton,
  UnderLinedButton,
} from '../../../components/Buttons';
import { Colors } from '../../../config/Constant';
import { H1, H3, SmallLightGrayText } from '../../../components/Texts';
import { bottomPopUpMessage } from '../../../helpers/helpers';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fetchUser } from '../../../../FirebaseFireStoreDB';
import { fetchUserProfile, signOut } from '../../../store/Slices/auth';

export default function Account({ navigation }) {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth?.id);
  const userProfile = useSelector((state) => state.auth?.userProfile);

  const getUser = async () => {
    const res = await fetchUser(userId);
    dispatch(fetchUserProfile(res));
  };

  useEffect(() => {
    getUser();
  }, []);

  const removeAccount = async () => {
    const res = await deleteUser(userId);
    dispatch(signOut());
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Header
        moreStyles={{
          justifyContent: 'flex-start',
          flexDirection: 'row',

          alignItems: 'center',
        }}
      >
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
          moreStyles={{
            marginTop: 8,
            marginLeft: 8,
            width: 16,
            height: 16,
          }}
        />

        <H3
          content={'Your Profile'}
          moreStyles={{
            color: Colors.gray700,
            fontWeight: 'bold',
            marginBottom: 8,
            marginLeft: 32,
            marginTop: 8,
          }}
        />
      </Header>
      <View
        style={{
          flex: 0.8,
          marginLeft: 16,
        }}
      >
        <H1
          content={
            `${userProfile?.firstName} ${userProfile?.lastName}` ||
            'Reed Richards'
          }
          moreStyles={{ marginTop: 32 }}
        />
        <ScrollView>
          <View
            style={{
              marginTop: 8,
            }}
          >
            <H3
              content={'Email'}
              moreStyles={{
                color: Colors.gray700,
                fontWeight: 'bold',
                marginTop: 32,
              }}
            />
            <SmallLightGrayText content={userProfile?.email || 'test'} />
          </View>

          <View
            style={{
              marginTop: 8,
            }}
          >
            <H3
              content={'Phone Number'}
              moreStyles={{
                color: Colors.gray700,
                fontWeight: 'bold',
              }}
            />
            <SmallLightGrayText content={userProfile?.phone || 'test'} />
          </View>

          <View
            style={{
              marginTop: 8,
            }}
          >
            <H3
              content={'Country'}
              moreStyles={{
                color: Colors.gray700,
                fontWeight: 'bold',
              }}
            />
            <SmallLightGrayText content={userProfile?.country || 'test'} />
          </View>

          <View
            style={{
              marginTop: 32,
            }}
          >
            <UnderLinedButton
              text={'Logout'}
              onPress={() => bottomPopUpMessage('BACKEND NOT IMPLEMENTED')}
            />
          </View>

          <View
            style={{
              marginTop: 32,
            }}
          >
            <UnderLinedButton
              text={'Privacy Policy'}
              onPress={() => bottomPopUpMessage('BACKEND NOT IMPLEMENTED')}
            />
          </View>

          {userProfile?.signUpType === 'google' ? null : (
            <View
              style={{
                marginTop: 32,
              }}
            >
              <UnderLinedButton
                text={'Change Passwords'}
                onPress={() => navigation.navigate('ChangePassword')}
              />
            </View>
          )}
          <View
            style={{
              marginTop: 32,
            }}
          >
            <UnderLinedButton
              text={'Remove Account'}
              textStyle={{
                color: Colors.red,
              }}
              onPress={() => removeAccount()}
            />
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          flex: 0.2,
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <CurvedButton
          text={'Edit'}
          onPress={() => {
            navigation.navigate('EditProfile', {
              id: userProfile?.id,
              userProfile,
            });
          }}
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
});
