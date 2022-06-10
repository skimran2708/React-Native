import { View, FlatList, StyleSheet } from "react-native";
import Meal from "../../models/meal";
import MealItem from "./MealItem";

interface MealsListProps {
  items: Meal[];
}

function MealsList(props: MealsListProps) {
  function renderMealItem(itemData: { item: Meal }) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
