import React, { Component } from 'react';
import Data from "./data";

export class Blank extends React.Component {
    render() {
        return (
            <div className="Blank">
               <p>please create  new todos</p>
               { Data.products.map((item)=>
            
         ( <img  key={item._id}src={item.image} />
         
          
        ) 
               
               
    )}
         </div>
        )
    }
}

export default Blank
