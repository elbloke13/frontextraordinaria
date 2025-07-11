import { Character } from "../utils/types.ts";



type Props = {
    character: Character
}


export default function CharacterDetail({character}: Props){

    if(!character) return(
        <div>
            No hay caracter
        </div>
    )

    return(

        <div class = "character-detail">
            <img src={character.image}></img>
            <div class="character-info">
                <h1>{character.name}</h1>
                <ul class = "character-info ul">
                    <li class = "character-info li">
                        <strong> Status: </strong>
                        {character.status}
                    </li>
                    <li class = "character-info li">
                        <strong> Species: </strong>
                        {character.species}
                    </li>
                    <li class = "character-info li">
                        <strong> Gender: </strong>
                        {character.gender}
                    </li>
                    <li class = "character-info li">
                        <strong> Origin: </strong>
                        {character.origin.name}
                    </li>
                    <li class = "character-info li">
                        <strong> Location: </strong>
                        {character.location.name}
                    </li>
                </ul>
            </div>
        </div>


    )


}