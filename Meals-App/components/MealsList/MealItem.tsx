import {
  View,
  Pressable,
  Text,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import MealDetails from "../MealDetails";
import { StackParamList } from "../../App";

interface MealItemProps {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
}

function MealItem(props: MealItemProps) {
  const navigation: NavigationProp<StackParamList> = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate("MealDetail", {
      mealId: props.id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: props.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{props.title}</Text>
          </View>
          <MealDetails
            duration={props.duration}
            affordability={props.affordability}
            complexity={props.complexity}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
