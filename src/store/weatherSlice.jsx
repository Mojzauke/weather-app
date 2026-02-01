import { createSlice } from '@reduxjs/toolkit';

// Helper do ładowania z LocalStorage
const loadFromStorage = () => {
  try {
    const saved = localStorage.getItem('weatherAppConfig');
    return saved ? JSON.parse(saved) : { unit: 'C', favorites: [] };
  } catch {
    return { unit: 'C', favorites: [] };
  }
};

const initialState = loadFromStorage();

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    toggleUnit: (state) => {
      // Cykl: C -> F -> K -> C
      if (state.unit === 'C') state.unit = 'F';
      else if (state.unit === 'F') state.unit = 'K';
      else state.unit = 'C';
      
      localStorage.setItem('weatherAppConfig', JSON.stringify(state));
    },
    toggleFavorite: (state, action) => {
      const cityId = action.payload;
      if (state.favorites.includes(cityId)) {
        state.favorites = state.favorites.filter(id => id !== cityId);
      } else {
        state.favorites.push(cityId);
      }
      localStorage.setItem('weatherAppConfig', JSON.stringify(state));
    },
  },
});

export const { toggleUnit, toggleFavorite } = weatherSlice.actions;
export default weatherSlice.reducer;