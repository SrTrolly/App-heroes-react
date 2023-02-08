
import { useMemo } from "react";
import { getHeroesByPUblisher } from "../helpers"
import { HeroCard } from "./";


export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPUblisher(publisher), [publisher]);


    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3" >
            {
                heroes.map(heroe => (
                    <HeroCard key={heroe.id}
                        {...heroe}
                    />

                    // <li key={heroe.id} >{heroe.superhero} </li>
                ))
            }
        </div>
    )
}
