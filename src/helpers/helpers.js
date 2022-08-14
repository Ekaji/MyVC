import Toast from "react-native-root-toast";

export const stringIsHere = (stringValue) => {
  return (
    stringValue !== undefined && stringValue !== null && stringValue !== ""
  );
};

export const bottomPopUpMessage = (message) => {
  // Add a Toast on screen.
  let toast = Toast.show(message, {
    duration: Toast.durations.LONG,
  });

  // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
  setTimeout(function hideToast() {
    Toast.hide(toast);
  }, 1000);
};
