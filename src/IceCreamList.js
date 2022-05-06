import React from 'react';
import IceCream from './IceCream';

export default function IceCreamList({ iceCreams }) {
  return (
    <div className='list'>
      {iceCreams.map((iceCream, i) => 
        <IceCream key={iceCream.name + i} iceCream={iceCream}/>)}
    </div>
  );
}
