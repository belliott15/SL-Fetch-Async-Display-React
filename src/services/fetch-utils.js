import { client } from './client.js';

export async function getIceCreams(){
  const response = await client
    .from('Ice_Cream')
    .select('*');

  return response.body;
}

export async function getPokemon(){
  const response = await client
    .from('Pokemon')
    .select('*');

  return response.body;
}

export async function getCandies(){
  const response = await client
    .from('candies')
    .select();

  return response.body;
}

export async function getHarryPotterCharacters(){
  const response = await client
    .from('Harry_Potter_characters')
    .select();

  return response.body;
}