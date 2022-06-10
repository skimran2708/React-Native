import React, { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [""],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
});

interface FavoritesContextProviderProps {
  children: React.ReactNode;
}

const FavoritesContextProvider = (props: FavoritesContextProviderProps) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  };

  function removeFavorite(id: string) {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
