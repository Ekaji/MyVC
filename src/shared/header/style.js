import { StyleSheet } from 'react-native';
import { Colors } from '../../config/Constant';

export const styles = StyleSheet.create({
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
