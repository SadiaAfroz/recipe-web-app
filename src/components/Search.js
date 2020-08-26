import React  from 'react';

// for stateless object this.props doesn't workout 
// need to use arguement that data is transfered by another component (props role)
const Search= props =>(
    <form onSubmit={props.getRecipe}>
        <input  type='text' name='recipeName' className='form__input'/>
        <button className='btn  btn-outline-info m-2'>Search</button>
    </form>
);
 
export default Search;