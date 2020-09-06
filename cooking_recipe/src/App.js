import React,{useState, useEffect} from 'react';

import './App.css';
import EachResipe from './EachResipe';

function App() {
  const foodItems=["oranges","banana", "mango", "carrots", "Watermelon", "apples", "pineapples", "beetroot"]
  const radomNo=Math.floor(Math.random()*7);
  console.log(radomNo);
const [data, setData]=useState([]);
const [search, setSearch]=useState('');
const [querry, setQuery]=useState(foodItems[radomNo]);
  const id ="997aff65";
  const key = "d78f7f68da39a7ab85ab56338f16fdbb";
  const Link = `https://api.edamam.com/search?q=${querry}&app_id=${id}&app_key=${key}`;

useEffect(()=>{
  getData();

},[querry])
  const getData = async () => {
    const data = await fetch(Link);
    const response = await data.json();
    setData(response.hits);
    console.log(response.hits)
  }
  const getValues=(e)=>{
    const value=e.target.value;
    setSearch(value);
  }
  const runQuery=(e)=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={runQuery}>
        <div className="row">
          <div className="col-md-8 offset-2">
            <input className="form-control" type="text" onChange={getValues} />
          </div>
          <div className="col-md-2 ml-0">
            <button className="btn btn-primary large" type="submit">Search</button>
          </div>
        </div>

        <div className="try2">
          {data.map((recipe) => {
            const carolies = recipe.recipe.calories;
            const image = recipe.recipe.image;
            const ingredients = recipe.recipe.ingredients;
            const name = recipe.recipe.label;
            return (
              <EachResipe
                key={name}
                name={name}
                carolies={carolies}
                image={image}
                ingredients={ingredients}
              />
            );
          })}
        </div>
      </form>
      <div className="Sorry">
        {data.length === 0 && " Sorry, There was no match for your querry"}
      </div>
    </div>
  );
}

export default App;
