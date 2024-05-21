import { toast } from "react-toastify";
import { addrecipe } from "../reducres/recipeReducer";

export const asyncgetRecipies = ()=> async(dispatch, getState)=>{
    try {
        let data = JSON.parse(localStorage.getItem("recipe")) || [];
        dispatch(addrecipe(data));
    } catch (error) {
       toast.error(error);
    }
}