import {combineReducers, configureStore} from '@reduxjs/toolkit';
import EncryptedStorage from 'react-native-encrypted-storage';
import {PersistConfig, persistStore} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import createSagaMiddleware from 'redux-saga';
import RootSaga from '../sagas';
import {
  AppReducer,
  LoadingReducer,
  AuthReducer,
  ReportReducer,
} from '../reducer';
import {Redux} from '../types';

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: EncryptedStorage,
  timeout: 30000,
  version: 1,
  debug: true,
  stateReconciler: autoMergeLevel2,
  whitelist: [Redux.auth],
  blacklist: [Redux.loading],
};

const rootReducers = combineReducers({
  app: AppReducer,
  auth: AuthReducer,
  report: ReportReducer,
  loading: LoadingReducer,
});
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducers);

const createDebugger = require('redux-flipper').default;
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, createDebugger()];
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});
sagaMiddleware.run(RootSaga);

export type RootState = ReturnType<typeof rootReducers>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
