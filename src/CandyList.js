import React from 'react';
import Candy from './candy';

export default function CandyList({ candies }) {
  return (
    <div>
      {candies.map((candy) => <Candy key={candy.id} candy={candy}/>)}
    </div>
  );
}
