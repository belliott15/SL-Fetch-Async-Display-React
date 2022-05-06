import React from 'react';

export default function IceCream({ iceCream }) {
  return (
    <div className='ice-cream-card'>
      <h2>{iceCream.name}</h2>
      <h4>{iceCream.brand}</h4>
      <ul>
        {iceCream.flavor.map((flavorite, i) => <li key={flavorite + i}>{flavorite}</li>)}
      </ul>
    </div>
  );
}
