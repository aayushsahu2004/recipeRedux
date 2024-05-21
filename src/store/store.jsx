import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./reducres/recipeReducer";

export default configureStore({
    reducer:{
        recipeReducer: recipeSlice
    }
})