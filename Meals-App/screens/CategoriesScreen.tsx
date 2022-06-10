import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";
import { StackParamList } from "../App";

interface CategoriesScreenProps
  extends NativeStackScreenProps<StackParamList> {}

const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
  const renderCategoryItem = (itemData: { item: Category }) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
