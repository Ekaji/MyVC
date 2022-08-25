import { View, Text, TouchableOpacity } from "react-native";
import SingleTab from "../../components/SingleTab";
import React from "react";
import { ImageSet } from "../../config/Constant";

export default function Explore() {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <View>
      <Text> Explore</Text>

      <TouchableOpacity
        // onPress={() => dispatch(increment())}
        style={{
          backgroundColor: "red",
          padding: 10,
          width: 100,
          height: 100,
        }}
      >
        <Text>Increment</Text>
      </TouchableOpacity>

      <View
        style={{
          width: 100,
          height: 50,
          backgroundColor: "blue",
        }}
      >
        <SingleTab
          text="Shirt"
          focused={false}
          imageUrl_focused={ImageSet.shirt_outline_white}
          imageUrl_unfocused={ImageSet.shirt_black}
        />
      </View>
      <TouchableOpacity
        // onPress={() => dispatch(decrement())}
        style={{
          backgroundColor: "red",
          padding: 10,
          width: 100,
          height: 100,
        }}
      >
        <Text>decrement</Text>
      </TouchableOpacity>
    </View>
  );
}
