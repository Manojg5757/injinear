import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'

const rootReducers = combineReducers({product:productSlice})

const persistConfig = {
    key:'root',
    storage,
    version:1
}

const persistedReducer = persistReducer(persistConfig,rootReducers)

export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware({
            serializableCheck:false
        })
    }
})

export const persistor = persistStore(store)

