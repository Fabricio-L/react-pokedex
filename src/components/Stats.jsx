import React, { useEffect, useState } from "react"
import { Button, Typography } from '@mui/material'
import { makeStyles } from "@mui/styles"
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        background: "#c51b1b"
    },
    buttonStyle: { 
        backgroundColor: "#fbd743 !important",
        color: "#363b81 !important",
        border: "solid 4px #363b81 !important",
        fontWeight: "bold !important",
        boxShadow: "5px 5px #5db9ff !important"
    },
    imgContainer: {
        background: "#fff",
        margin: "1em",
        height: "fit-content"
    },
    textSpan: {
        fontWeight: "bold"
    }
}))

const Stats = (props) => {
    const classes = useStyle()
    const [pokemon, setPokemon] = useState(undefined)

    useEffect(() => {
        async function fetchData() {
            await fetch("https://laky-pokedex-api.herokuapp.com/api/pokemons/"+props.pokeId)
                .then(response => response.json())
                .then(data => setPokemon(data))
        }
        fetchData()
    }, [props.pokeId])
    
    return(
        <div>
            <Dialog open={props.open} onClose={props.onClose} maxWidth='md' fullWidth={true}>
                <DialogTitle className={classes.root}>Stats</DialogTitle>
                <DialogContent>
                    <div className={classes.imgContainer}>
                        <img src={props.pokeImg} alt="Pokemon" style={{boxShadow: "inset 0px 0px 0px 3px #000000, 0px 0px 0px 30px #dadada", margin: "30px"}} />
                    </div>
                    
                        {pokemon 
                        ?<div>
                            <Typography><span className={classes.textSpan}>Nombre: </span>{pokemon.name}</Typography>
                            <Typography><span className={classes.textSpan}>Altura: </span>{pokemon.height}</Typography>
                            <Typography><span className={classes.textSpan}>Peso: </span>{pokemon.weight}</Typography>
                            <Typography><span className={classes.textSpan}>Tipo: </span>
                                {pokemon.types.map((element) => (
                                    <span key={element.slot}>{element.type.name} / </span>
                                ))}
                            </Typography>
                            <Typography><span className={classes.textSpan}>Habilidades: </span>
                                {pokemon.abilities.map((element) => (
                                    <span key={element.slot}>{element.ability.name} - </span>
                                ))}
                            </Typography>
                            <Typography><span className={classes.textSpan}>Ataques: </span>
                                {pokemon.moves.map((element) => (
                                    <span key={element}>{element.move.name} - </span>
                                ))}
                            </Typography>
                        </div>
                        : <div>Loading data...</div>
                        }

                </DialogContent>
                <DialogActions>
                    <Button className={classes.buttonStyle} onClick={props.onClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Stats