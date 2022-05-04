import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import { selectIds } from "../store/redux/favorites";

const FavoritesScreen = () => {
  //   const favMealsCtx = useContext(FavoritesContext);
  const favMeals = useSelector((state) => state.favoriteMeals.ids);
  //   const favMeals = useSelector(selectIds);

  const favoriteMeals = MEALS.filter((meal) =>
    // favMealsCtx.ids.includes(meal.id)
    favMeals.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default FavoritesScreen;
