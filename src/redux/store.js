import { createStore, applyMiddleware } from "redux";

import rootReducer from "./root.reducer";

import createSagaMiddleware from "redux-saga";

import logger from "redux-logger";

import { persistStore } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();

sagaMiddleware.run();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") middlewares.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
