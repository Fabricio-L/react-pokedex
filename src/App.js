import React from 'react'
import Showcase from './components/Showcase'
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles((theme) => ({
    root: {
        background: "linear-gradient(to right bottom, #40B4F5, #4F11D2 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    containerPokemons: {
        justifyContent: "center",
        maxWidth: "1366px",
        margin: "0em 2em"
    }
}))

function App() {
    const classes = useStyle()

    return (
        <div className={classes.root}>
            <img src="logo-pokemon.png" alt="Logo Pokemon" style={{width: "30%", margin: "1em"}} />
            <div className={classes.containerPokemons}>
                <Showcase />
            </div>
        </div>
    )
}

export default App
