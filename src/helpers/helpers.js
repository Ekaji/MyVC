import Toast from "react-native-root-toast";
import countries from "countries-list";

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

//https://github.com/umpirsky/country-list

export function getListOfCountriesNames() {
  var countryNames = [];
  var countryLimit = 10;
  var count = 0;
  for (var key in countries.countries) {
    if (count > countryLimit) {
      break;
    }
    countryNames.push(countries.countries[key].name);
    count++;
  }

  return countryNames;
}

export const pathResolver = ( path ) => {
  if (typeof path !== 'string') {
   throw 'Parameter is not a string!';
  }
  if (!path.includes('.')) {
    return path;
  }
  var allPathNames = path.split(".");
  return allPathNames;
  
}
