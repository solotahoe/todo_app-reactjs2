import React from 'react';
import style from './recipe.module.css';

export default function EachResipe({carolies, image, ingredients,name}) {
    return (
        <div className="try">
           <img src={image} alt={image}/>
          <h1 className={style.h1}>{name}</h1>
    <p>Carolies {''} {carolies}</p>
            <ol>
        {ingredients.map((ingredient)=>{
            return( 
                <li>{ingredient.text}</li>
               )
                 
        })}
          </ol>
        </div>
    )
}
