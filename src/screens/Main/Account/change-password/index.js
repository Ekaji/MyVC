import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MyVcBaseTextField } from '../../../../components/TextFields';
import { H1 } from '../../../../components/Texts';
import { SCREEN_WIDTH } from '../../../../config/Constant';
import HeaderBar from '../../../../shared/header';
import LongButton from '../../../../shared/long-button';
import { styles } from './style';

const ChangePassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderBar hasBackButton />
      <View style={styles.mainBodyContainer}>
        <H1 content={'Confirmation Pin'} moreStyles={styles.mainHeaderText} />

        <Text style={styles.subHeaderText}>
          Kindly confirm your pin with the 6 digit code{'\n'}sent to your email
          {'\n'}
          [mrfantastic@mail. com]
        </Text>

        <View style={styles.formInputContainer}>
          <MyVcBaseTextField
            keyboardType="numeric"
            returnKeyType="done"
            headerText={'Confirmation Pin'}
            placeholder={'Hello'}
            moreViewStyles={{
              width: SCREEN_WIDTH - 32,
            }}
          />

          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.requestCodeContainer}
          >
            <Text style={styles.requestCodeText}>Request new code</Text>
          </TouchableOpacity>
        </View>
      </View>
      <LongButton
        title={'Next'}
        onPress={() => navigation.navigate('NewPassword')}
      />
    </View>
  );
};

export default ChangePassword;
