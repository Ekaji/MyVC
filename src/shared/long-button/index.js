import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { Colors } from '../../config/Constant';

const LongButton = ({
  loading,
  title,
  containerStyle,
  isNotBottom,
  titleStyle,
  buttonStyle,
  onPress,
  disabled,
}) => {
  return (
    <View style={!isNotBottom && [styles.containerStyle, containerStyle]}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.buttonStyle,
          buttonStyle,
          disabled && styles.disabledStyle,
        ]}
      >
        {loading ? (
          <ActivityIndicator size={'small'} color={Colors.white} />
        ) : (
          <Text
            style={[styles.title, titleStyle, disabled && styles.disabledStyle]}
          >
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'center',
  },
  buttonStyle: {
    height: 64,
    width: '90%',
    backgroundColor: Colors.black,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  disabledStyle: {
    backgroundColor: '#A4D7FF',
    color: Colors.lightGray,
  },
});

export default LongButton;
