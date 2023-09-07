import { useState } from "react";

export const searchPokemon = async (search) => {
  if (search === "" || null) return null;
  //console.log("desde el service(afuera del try)")
  console.log(`from service ${search}`);
  const response = []
  try {
    console.log(`Este es desde la llamada, lo que iria en la url ${search}`);
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`, { mode: "cors" })
      .then((res) => {
        return res.text();
      })
      .then((res) => {
        //return res.json())
        return res ? JSON.parse(res) : {};
      })
      .then((data) => response.push(data));
      console.log(`aca esta lo que tiene guardado reponse ${response}`)
      return response
    // return response?.map((pokemon)=>({
    //     img: pokemon.sprites.front_default,
    //     name: pokemon.forms.name,
    //     id: pokemon.id
    // }))

  } catch (e) {
    throw new Error("Error buscando pokemon");
  }
};
