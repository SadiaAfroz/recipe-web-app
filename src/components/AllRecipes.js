import React from 'react';
import {Link } from 'react-router-dom' // Link work as anchor tag in html

const Recipes = props =>(
    <div className='container'>
        <div className='row'>
            { props.recipes.map((recipe)=>{
                return (
                <div key={recipe.recipe_id} className='col-md-4'>    
                    <div className='recipes__box'>
                        <img src={recipe.image_url}  alt={recipe.title} className='rounded recipes__box-img'/>
                        <div className='recipes_text m-3'>
                            {/* because of the title length recipe boxes are of different size */}
                            <h5 className='recipes__title'>
                                {recipe.title.lenth < 20 ? `${recipe.title}` : `${recipe.title.substring(0,25)}...`}
                                </h5>
                            <p className='recipes__subtitle'>Author: <span>
                                {recipe.publisher}
                            </span>
                            </p>
                        </div>
                        <div className='center'>    
                            <button className='recipe_buttons '>
                                <Link to={{pathname: `/recipe/${recipe.recipe_id}`,
                                    state: {recipeId: recipe.recipe_id}
                            }}>View Recipe</Link> {/*this file has been bound to Recipe component*/}
                                </button>
                        </div>    
                    </div>
                </div>
                );
            })}
        </div>

    </div>
);
export default Recipes;