import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Character } from "../utils/types.ts";
import CharacterCard from "../components/CharacterCard.tsx";
import { getCharacters, getCharactersname } from "../utils/function.ts";





export const handler:Handlers ={

  GET: async (req:Request,ctx: FreshContext) => {

    const url = new URL(req.url);
    const nombre = url.searchParams.get("nombre");

    if(nombre !== null){
      const charactersname: Character[] = await getCharactersname(nombre);
      return ctx.render(charactersname);

    }
    const characters:Character[] = await getCharacters();
    return ctx.render(characters);

  }

}



export default function Home(props: PageProps<Character[]>){

  const characters = props.data;
  return(
    <div>
      <h1>
        Rick and Morty Characters
      </h1>
    <div>
     <form class= "search-form" method= "GET">
      <input class="search-input" name="nombre" type= "text" placeholder="Nombre del personaje"></input>
      <button type="submit" class="button">Buscar</button>
      </form>
    <div class = "characters">
      {characters.map((c) =>
        <CharacterCard character={c} key={c.id}/>
      )}
    </div>
    <div class="pagination">
    <button type="submit" class="button">Anterior</button>
    <span>"1""/""42"</span>
    <button type= "submit" class="button">Siguiente</button>
    </div>
    </div>
    </div>
  )

}