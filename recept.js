var recepten = require('./data/recepten').data;

exports.list = function(req,res){
    res.render('recepten.ejs',{
        title: 'Sofies keuken - recepten',
        recepten: recepten
    });
};