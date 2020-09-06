import React from 'react';
import data from './data';
import image from './images/afro.jpg';


export default function Experi() {
    const productss= data.products;
    console.log(image);
   
    return (
      <div>
        <div>
          {productss.map((item, index) => (
            <ul key={index}>
              <li>{item._id}</li>
              <li>{item.image}</li>

              <li>
                <img src={item.image} alt={item._id} />
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          ))}
        </div>
      </div>
    );
}
