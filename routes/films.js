const express = require("express")

const router = express.Router()

const fetchFilms = require('../utils/fetchFilms')

router.get('/', function (req, res) {
    res.render('index.pug')
})

router.get("/film/:title",async (req,res)=>{
    let peliObtenida = await fetchFilms(req.params.title)
    console.log(peliObtenida);
    if(peliObtenida !== null){
        res.render("film",  {peliObtenida} );
    }else{
        res.status(404).json({message :"Film not found"})
    }
})

router.post("/film/", (req, res) => {

    res.redirect(`/film/${req.body.title}`);
  });




module.exports = router;