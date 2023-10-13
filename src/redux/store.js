import { configureStore } from '@reduxjs/toolkit'
import { typesReducer } from './slices/types'
import { productsReducer } from './slices/products'
import { productReducer } from './slices/products'
const store = configureStore({
    reducer: {
        types: typesReducer,
        products: productsReducer,
        product: productReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store