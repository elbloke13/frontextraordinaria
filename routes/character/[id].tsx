import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Character } from "../../utils/types.ts";
import CharacterDetail from "../../components/CharacterDetail.tsx";
import { getCharacter } from "../../utils/function.ts";



export const handler:Handlers = {
    GET:async(_req,ctx: FreshContext) => {

        const id = ctx.params.id;
        const character = await getCharacter(id);
        if(!character) return ctx.render();
        return ctx.render(character);
    }
}


export default function Home(props: PageProps<Character>){

    const character = props.data;

    return(
        <div class = "container">
        <a href="/" class = "back-link">Volver</a>
        <CharacterDetail character={character}/>
        </div>
    )
}