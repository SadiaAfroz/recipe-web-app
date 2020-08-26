import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Search from './components/Search'
import Recipes from './components/AllRecipes'

class App extends Component {
  state = { 
    recipes:[]
   };

   // onload
   componentDidMount= () => {
     const json= localStorage.getItem("recipes");
     const recipes= JSON.parse(json);
    if (json !== null)
      this.setState({recipes})    // property key and name is same so one is used 
    
  }
  // whenever state updates it'll be stored in local storage for further use
  componentDidUpdate= () => {
    const recipes= JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  } 
  // e is an event object of js 
  getRecipe = async (e)=>{
      e.preventDefault(); // prevent refreshing
      const recipeName= e.target.elements.recipeName.value;

      // to call http call used fetch
      // "cors-anywhere.herokuapp.com"  is added to trick the server that it's not local server
      const api_call= await fetch(`https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${recipeName}`);
      
      //console.log(recipeName);
      const data= await api_call.json()
      this.setState({recipes: data.recipes})
      //console.log(data.recipes[0].recipe_id);
  }
  render() { 
      return (
          <div className="App">
            <header className="App-header">
              <h1 style={{fontFamily: "sans-serif", color : "red", fontWeight: "bold"}}>Get your Recipe </h1>
            </header>

            {/* argument passing */}
            <Search getRecipe={this.getRecipe}/>
            {/* opening {}means sth that related to javascript */}
            <Recipes recipes={this.state.recipes}/>
            
          </div>
        );  //this is like React.createElement(returning value) so that value should be a element
  }
}



export default App;