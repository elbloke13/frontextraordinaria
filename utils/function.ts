import Axios from "axios";
import { Character } from "./types.ts";

export async function getCharacters(): Promise<Character[]>{

    const response = await Axios.get("https://rickandmortyapi.com/api/character");
    if(!response) throw new Error("Api Error");

    const character:Character[] = response.data.results;
    return character;
}

export async function getCharactersname(nombre:string): Promise<Character[]>{

const response = await Axios.get(`https://rickandmortyapi.com/api/character/?name=${nombre}`);
      if(!response) throw new Error("Api Error");
      const charactersname: Character[] = response.data.results;
      return charactersname;
}

export async function getCharacter(id:string): Promise<Character | null>{

    const response = await Axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    if(!response) throw new Error("Api Error");
    const character: Character= response.data;
    return character ?? null;
}
