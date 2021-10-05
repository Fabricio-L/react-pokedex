import React, { useState } from "react"
import { Card, Typography, CardMedia, CardContent, CardActions, Button, Grid } from '@mui/material'
import { makeStyles } from "@mui/styles"
import Stats from "./Stats"

const useStyle = makeStyles((theme) => ({
    cardStyle: {
        // margin: "1em 3em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "3em 0em",
        borderRadius: "60px !important",
        border: "solid 8px #363b81",
        boxShadow: "10px 10px 5px 0px black !important"
    },
    titleStyle: {
        color: "#363b81 !important",
        fontWeight: "bold !important",
        textTransform: "capitalize"
    },
    buttonStyle: { 
        backgroundColor: "#fbd743 !important",
        color: "#363b81 !important",
        border: "solid 4px #363b81 !important",
        fontWeight: "bold !important",
        boxShadow: "5px 5px #5db9ff !important"
    }
}))

const Pokecard = ({id, name}) => {
    const classes = useStyle()
    const [open, setOpen] = useState(false)
    const imgLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+id+'.png'
    
    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return(
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.cardStyle}>
                <CardMedia style={{width: "auto"}} component="img" height="140" image={imgLink} alt={name} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className={classes.titleStyle}>
                    {id} - {name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className={classes.buttonStyle} variant="contained" size="large" onClick={handleClickOpen}>Stats</Button>
                    <Stats pokeId={id} pokeImg={imgLink} open={open} onClose={handleClose} />
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Pokecard