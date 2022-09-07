import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import React from "react";
import { Colors, ImageSet } from "../config/Constant";

export default function ModalWrapper({
  isVisible,
  children,
  onBackdropPress,
  swipeDirection = [],
}) {
  return (
    <View>
      <Modal
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        swipeDirection={swipeDirection}
        style={styles.view}
        backdropOpacity={0.4}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 8,
            padding: 16,
            borderRadius: 8,
            height: 200,
          }}
        >
          <ModalCancelButton onPress={onBackdropPress} />
          <View style={styles.modelInnerContainer}>
            {children ? children : <DefaultModalContent props={props} />}
          </View>
        </View>
      </Modal>
    </View>
  );
}

function ModalCancelButton({ onPress }) {
  return (
    <View style={styles.cancelButton}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={ImageSet.cancel_bold_black}
          style={{
            width: 20,
            height: 20,
           
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  view: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modelInnerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
const DefaultModalContent = ({ props }) => {
  return (
    <View style={styles.content}>
      <Text style={styles.contentTitle}>Hi 👋!</Text>
      <Button testID={"close-button"} onPress={props.onPress} title="Close" />
    </View>
  );
};
