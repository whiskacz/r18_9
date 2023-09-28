import workersReducer from './reducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        workers: workersReducer,
    },
});

export default store