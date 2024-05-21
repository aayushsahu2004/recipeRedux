import { nanoid } from 'nanoid';
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { Recipecontext } from '../context/RecipeContext';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncgetRecipies } from '../store/actions/recipeAction';

const Create = () => {
    const dispatch = useDispatch();
    const nevigator = useNavigate();
    const { recipes } = useSelector(state => state.recipeReducer)

    const [image, setimage] = useState('');
    const [recipeName, setrecipeName] = useState("");
    const [discription, setdiscription] = useState("");
    const [ingredients, setingredients] = useState("");
    const [instructions, setinstructions] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();
        const newRecipe = {
            id: nanoid(),
            image,
            recipeName,
            discription,
            ingredients,
            instructions
        };
        localStorage.setItem(
            "recipe",
            JSON.stringify([...recipes, newRecipe])
        );
        dispatch(asyncgetRecipies());
        toast.success("Recipe Created Successfully!");
        nevigator("/recipe");
    };


    return (
        <div className='w-full pb-5 md:pb-0 md:h-[120vh] px-5 mt-10 md:px-20 flex items-center justify-center'>
            <div className='w-full md:w-2/3 h-full bg-red'>
                <h1 className='mt-10 mb-10 text-5xl md:text-6xl font-extrabold'>Create <br />New <span className='text-[#FC815F]'>Recipe</span></h1>
                <form onSubmit={SubmitHandler}>
                    <input onChange={(e) => setimage(e.target.value)} value={image} className='w-full py-3 px-6 border border-zinc-400 rounded-md mb-6' type="url" placeholder='Recipe Image URL' />
                    <input onChange={(e) => setrecipeName(e.target.value)} value={recipeName} className='w-full py-3 px-6 border border-zinc-400 rounded-md mb-6' type="text" placeholder='Recipe Name' />
                    <textarea onChange={(e) => setdiscription(e.target.value)} value={discription} className='w-full py-3 px-6 border border-zinc-400 rounded-md mb-6 resize-none' placeholder='Recipe Description'></textarea>
                    <textarea onChange={(e) => setingredients(e.target.value)} value={ingredients} className='w-full py-3 px-6 border border-zinc-400 rounded-md mb-6 resize-none' placeholder="Recipe Ingredients -> 'use comma to seperate ingredients'..."></textarea>
                    <textarea onChange={(e) => setinstructions(e.target.value)} value={instructions} className='w-full py-3 px-6 border border-zinc-400 rounded-md mb-6 resize-none' placeholder="Recipe Instructions -> 'use comma to seperate instructions'..."></textarea>
                    <div className='w-full text-right'>
                        <button className='px-6 py-2 bg-[#FC815F] text-zinc-100 font-medium rounded-md'>Publish Recipe</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create