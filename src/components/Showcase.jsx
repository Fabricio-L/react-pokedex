import { Grid } from "@mui/material"
import React, { Fragment, useEffect, useState } from "react"
import Pokecard from './Pokecard'

const Showcase = () => {
    const [pokemons, setPokemons] = useState([{}])
    var i = 1

    useEffect(() => {
        fetch('https://laky-pokedex-api.herokuapp.com/api/pokemons')
            .then(response => response.json())
            .then(data => setPokemons(data.results))
    }, [])

    return (
        <Fragment>
            <Grid container spacing={4}>
                {pokemons.map((pokemon) => (
                    <Pokecard id={i++} key={i} name={pokemon.name} />
                ))}
            </Grid>
        </Fragment>
    )
}

export default Showcase