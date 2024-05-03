// shorcut rxslice create a redux slice

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// Define la forma del estado del contador
interface CounterState {
  count: number;
  isReady: boolean;
}

// Estado inicial del contador
const initialState: CounterState = {
  count: 5, // Inicialmente, el contador tiene un valor de 5
  isReady: false,
};

// Crea un slice de Redux llamado 'counter' con su estado inicial y posibles reducers
const counterSlice = createSlice({
  name: 'counter', // Nombre del slice, utilizado para acceder a este slice desde la tienda
  initialState, // Estado inicial del slice
  reducers: {
    initCounterState(state, action: PayloadAction<number>){
      if(state.isReady) return;

      state.count = action.payload;
      state.isReady = true;
    },

    addOne(state){
      state.count++
    },

    substractOne(state){
      state.count--;
    },

    resetCount(state, action: PayloadAction<number>){
      if (action.payload < 0) {
        action.payload = 0
      }
      state.count = action.payload;
    }
  }
});

// Exporta las acciones del slice. En este caso, no hay acciones definidas todavía.
export const {addOne, substractOne, resetCount, initCounterState} = counterSlice.actions;

// Exporta el reducer del slice para que pueda ser combinado con otros reducers.
export default counterSlice.reducer;
