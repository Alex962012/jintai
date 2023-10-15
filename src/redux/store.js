import { configureStore } from '@reduxjs/toolkit'
import { typesReducer } from './slices/types'
import { productsIdReducer } from './slices/products'
import { productReducer } from './slices/products'
import { productsReducer } from './slices/products'
import { authReducer } from './slices/auth'
const store = configureStore({
    reducer: {
        types: typesReducer,
        productsId: productsIdReducer,
        product: productReducer,
        products: productsReducer,
        auth: authReducer

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store