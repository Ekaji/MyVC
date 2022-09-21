import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

import { Colors, ImageSet, SCREEN_WIDTH } from '../config/Constant';
import { H3 } from '../components/Texts';
import { getListOfCountriesNames, stringIsHere } from '../helpers/helpers';
import SelectDropdown from 'react-native-select-dropdown';

export function MyVcBaseTextField({
  headerText,
  placeholder,
  onChangeText,
  onDelete,
  value,
  moreTextInputStyles,
  autoFocus,
  multiline,
  moreViewStyles,
  secureTextEntry = false,
  ...props
}) {
  return (
    <View style={{ marginBottom: 8, ...moreViewStyles }}>
      {stringIsHere(headerText) && (
        <H3
          content={headerText}
          moreStyles={{
            color: Colors.gray700,
            fontWeight: 'bold',
            marginBottom: 8,
          }}
        />
      )}

      <TextInput
        multiline={multiline}
        autoFocus={autoFocus}
        value={value}
        style={{ ...styles.baseTextInput, ...moreTextInputStyles }}
        placeholder={placeholder}
        onChangeText={onChangeText}
        paddingStyle={styles.paddingStyle}
        onKeyPress={(e) => {
          e.nativeEvent.key === 'Backspace' ? null : null;
        }}
        secureTextEntry={secureTextEntry}
        {...props}
      />
    </View>
  );
}

export function MyVcIconTextField({
  headerText,
  placeholder,
  onChangeText,
  onDelete,
  value,
  moreStyles,
  autoFocus,
  multiline,
  iconImageName,
  onTapIcon,
  iconSize,
  moreViewStyles,
  moreTextInputStyles,
  secureTextEntry,
  isDropDown,
  isDropDownOpen,
  rightButton = null,
}) {
  return (
    <View style={{ width: '100%', marginBottom: 8, ...moreViewStyles }}>
      {stringIsHere(headerText) && (
        <H3
          content={headerText}
          moreStyles={{
            color: Colors.gray700,
            fontWeight: 'bold',
            marginBottom: 8,
          }}
        />
      )}

      <View style={{ ...styles.iconView, alignItems: 'center' }}>
        <TextInput
          multiline={multiline}
          autoFocus={autoFocus}
          value={value}
          style={{ ...styles.iconTextInput, ...moreStyles }}
          placeholder={placeholder}
          editable={isDropDown ? false : true}
          onChangeText={onChangeText}
          paddingStyle={styles.paddingStyle}
          onKeyPress={(e) => {
            e.nativeEvent.key === 'Backspace' ? null : null;
          }}
          secureTextEntry={secureTextEntry}
        />
        {iconImageName && (
          <TouchableOpacity
            onPress={onTapIcon}
            style={{
              width: 40,
              height: 40,
              alignment: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={iconImageName}
              style={{ width: iconSize || 24, height: iconSize || 24 }}
            />
          </TouchableOpacity>
        )}
        {rightButton}
      </View>

      {isDropDownOpen && (
        <View onPress={onTapIcon} style={styles.countryContainer}>
          {getListOfCountriesNames().map((country) => {
            return <Text>{country.name}</Text>;
          })}
        </View>
      )}
    </View>
  );
}

export function MyVCDropDown({ moreViewStyles, headerText, onComplete }) {
  return (
    <View>
      <H3
        content={headerText}
        moreStyles={{
          color: Colors.gray700,
          fontWeight: 'bold',
          marginBottom: 8,
        }}
      />
      <SelectDropdown
        data={getListOfCountriesNames()}
        onSelect={(selectedItem) => {
          onComplete(selectedItem);
        }}
        defaultButtonText={'Select country'}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
        buttonStyle={{ ...styles.dropdown1BtnStyle, ...moreViewStyles }}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        renderDropdownIcon={() => {
          return (
            <Image
              source={ImageSet.dropDown}
              resizeMode="contain"
              style={styles.imageIcon}
            />
          );
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  baseTextInput: {
    height: 40,
    borderColor: Colors.gray,
    borderWidth: 0.3,
    borderRadius: 6,
    padding: 10,
    minWidth: 100,
  },
  iconTextInput: {
    height: 40,
    padding: 10,
    minWidth: 100,
    flex: 1,
  },
  iconView: {
    borderRadius: 6,
    flexDirection: 'row',
    width: '100%',
    borderWidth: 0.5,
    borderColor: Colors.gray500,
  },
  basTextInputView: {
    width: '100%',
  },
  countryContainer: {
    height: 430,
    width: SCREEN_WIDTH - 32,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: Colors.red,
    position: 'absolute',
  },
  imageIcon: {
    width: 20,
    height: 20,
  },
  dropdown1BtnTxtStyle: { color: '#444', textAlign: 'left', fontSize: 14 },
  dropdown1DropdownStyle: {
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    marginTop: 10,
  },
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
    borderBottomWidth: 0,
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  dropdown1RowTxtStyle: {
    color: Colors.black,
    textAlign: 'left',
    paddingBottom: 16,
  },
  dropdown1BtnStyle: {
    width: '80%',
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: Colors.gray500,
  },
});
