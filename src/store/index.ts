import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter/counterSlice';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

// Configura la tienda de Redux con reducers, acciones y middleware
export const store = configureStore({
  reducer: {
    counter: counterReducer
  }, // Aquí se pueden agregar los reducers que definen el estado de la aplicación
});

// Inferir los tipos `RootState` y `AppDispatch` desde la propia tienda
export type RootState = ReturnType<typeof store.getState>;
// Tipo inferido: { posts: PostsState, comments: CommentsState, users: UsersState }
export type AppDispatch = typeof store.dispatch;

// Hook personalizado para despachar acciones
export const useAppDispatch: () => AppDispatch = useDispatch;
// Hook personalizado para seleccionar partes del estado global
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

