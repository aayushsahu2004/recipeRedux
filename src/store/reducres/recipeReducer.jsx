import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recipes:[]
}

export const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {
        addrecipe: (state, actions) => {
            state.recipes = actions.payload;
        }
    }

})

export const { addrecipe } = recipeSlice.actions;

export default recipeSlice.reducer;