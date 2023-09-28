import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WorkersState {
    workers: string[]
};

const initialState: WorkersState = {
    workers: []
};

const workersSlice = createSlice({
    name: 'workers',
    initialState,
    reducers: {
        addWorker: (state, action: PayloadAction<string>) => {
            state.workers.push(action.payload)
        },
    },
});

export const { addWorker } = workersSlice.actions;
export default workersSlice.reducer