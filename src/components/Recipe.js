import React, { Component } from 'react';
import {Link } from 'react-router-dom' // Link work as anchor tag in html but anchor reloads the page


class Recipe extends Component {
    state = { 
        activeRecipe:{}
    }
    //onload function
    componentDidMount= async (e)=>{
        const recipe_id=this.props.location.state.recipeId;
  
        // to call http call used fetch
        // "cors-anywhere.herokuapp.com"  is added to trick the server that it's not local server
        const api_call= await fetch(`https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/get?rId=${recipe_id}`);
        
        //console.log(recipeName);
        const data= await api_call.json()
        this.setState({activeRecipe: data.recipe})
        console.log(this.state.activeRecipe);

    }
    render() { 
        const recipe_details=this.state.activeRecipe;
        return ( 

            <div className='container m-3'>
                {
                    Object.keys(this.state.activeRecipe).length !==0  &&
                    <div className='active-recipe'>
                        <img className='active-recipe__img' src={recipe_details.image_url} alt={recipe_details.title}/>
                        <h3 className='active-recipe__title'>{recipe_details.title}</h3>
                        <h4 className='active-recipe__publisher'>
                            Publisher : <span>{recipe_details.publisher}</span>
                        </h4>
                        <p className='active-recipe__website'>
                            Website:
                            <span><a href={recipe_details.publisher_url}> {recipe_details.publisher_url}</a></span>
                        </p>
                         <h4 className='active-recipe__publisher'>Ingredients: </h4>
                        <ol>
                                {recipe_details.ingredients.length ? recipe_details.ingredients.map((ingredient) =>
                                <li>{ingredient}</li>): <li></li>}
                        </ol>    
                        <button className='active-recipe__button m-2'>
                            <Link to={{pathname: `/`}}>Go Home</Link> </button>
               </div>
                }
            </div>
        );
    }
}
 


export default Recipe;