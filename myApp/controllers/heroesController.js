


let heroesController = {
    listado: function(req, res) {
        res.render('heroes');
      },
    detalle: function(req,res){
        var heroesListado = require("../data/heroes.json")
        
        if (req.params.id > heroesListado.length){
            res.send('No tenemos en nuestra base ningun heroe ni heroina con ese id')
        }else{
           res.send('Hola mi nombre es ' + heroesListado[req.params.id].nombre +' y soy '+ heroesListado[req.params.id].profesion)
        }
    },

    resenia: function(req,res){
        var heroesListado = require("../data/heroes.json")
        
        if (req.params.id > heroesListado.length){
            res.send('No tenemos en nuestra base ningun heroe ni heroina con ese id')
        }else{
           res.send(heroesListado[req.params.id].nombre + " .Resenia: "+heroesListado[req.params.id].resenia)
        }
    }
};

module.exports = heroesController;