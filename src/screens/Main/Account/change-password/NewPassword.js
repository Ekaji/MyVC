import React from 'react';
import { View, Text } from 'react-native';
import { LongButton } from '../../../../components/Buttons';
import { HeaderBar } from '../../../../components/Header';
import { MyVcIconTextField } from '../../../../components/TextFields';
import { H1 } from '../../../../components/Texts';
import { ImageSet } from '../../../../config/Constant';
import { styles } from './style';

const NewPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderBar hasBackButton />
      <View style={styles.mainBodyContainer}>
        <H1 content={'Confirmation Pin'} moreStyles={styles.mainHeaderText} />

        <View style={[styles.formInputContainer, styles.marginTop]}>
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
        </View>
      </View>
      <LongButton
        title={'Save'}
        onPress={() => navigation.navigate('Account')}
      />
    </View>
  );
};

export default NewPassword;
