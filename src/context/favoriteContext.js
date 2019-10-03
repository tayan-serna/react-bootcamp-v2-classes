import { createContext } from 'react';

/* const FavoriteContext = createContext({
  favoriteCharts: {},
  setFavoriteCharts: () => {}
}); */

const FavoriteContext = createContext([{}, () => {}]);

export default FavoriteContext;
