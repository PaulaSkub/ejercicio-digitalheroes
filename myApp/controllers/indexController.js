
let indexController = 
{
    bienvenida: function(req, res) {
        res.render('index');
      },
    creditos: function(req,res){
        res.send(" Creditos: Paula Skubic")
    }



}

module.exports = indexController;