import { Character } from "../utils/types.ts";



type Props = {
    character: Character;
}


export default function CharacterCard({character}: Props){


    return(

        <div class = "character-card">
            <a href= {`/character/${character.id}`} >
              <img src={character.image} class = "character-card img"></img>  
            </a>
            <p>{character.name}</p>
        </div>


    )
}