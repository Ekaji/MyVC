import { StyleSheet } from 'react-native';
import { Colors, SCREEN_WIDTH } from '../../../../config/Constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  mainBodyContainer: {
    marginTop: 24,
    marginHorizontal: 16,
  },
  mainHeaderText: {
    textAlign: 'center',
  },
  subHeaderText: {
    fontSize: 16,
    paddingTop: 32,
    textAlign: 'center',
    lineHeight: 25,
    fontWeight: '400',
  },
  formInputContainer: {
    marginTop: 60,
    alignSelf: 'center',
  },
  requestCodeContainer: {
    marginTop: 48,
  },
  requestCodeText: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: 'bold',
    color: Colors.black,
    textDecorationLine: 'underline',
  },
  button: {
    marginVertical: 8,
    width: '90%',
    height: 64,
    borderRadius: 32,
    alignSelf: 'center',
    bottom: 10,
    position: 'absolute',
  },
  inputText: {
    width: SCREEN_WIDTH - 43,
    marginBottom: 32,
  },
  marginTop: {
    marginTop: 120,
  },
});
