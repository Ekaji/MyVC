import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '../config/Constant';
import { useNavigation } from '@react-navigation/native';

export default function Header({ children, moreStyles }) {
  return <View style={{ ...styles.container, ...moreStyles }}>{children}</View>;
}

export function HeaderBar({ hasBackButton, headerText }) {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      {hasBackButton && (
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={ImageSet.back_icon}
              style={styles.backButton}
              resSizeMode="contain"
            />
          </TouchableOpacity>

          {headerText && (
            <View style={styles.backButtonTextContainer}>
              <Text style={styles.backButtonText}>{headerText}</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    borderBottomColor: Colors.verylightGray,
    borderBottomWidth: 1,
    width: '100%',
  },
  headerContainer: {
    height: 64,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.verylightGray,
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backButtonTextContainer: {
    marginLeft: 27,
  },
  backButton: {
    tintColor: Colors.darkgrey100,
    width: 20,
    height: 20,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
  },
});
