var recepten = require('./data/recepten').data;

exports.list = function(req,res){
    res.render('recepten.ejs',{
        title: 'Sofies keuken - recepten',
        recepten: recepten
    });
};

exports.single = function(req, res) {
    var data = recepten.filter(function(recept) {
        return (recept.url === req.params.title);
    });

    if (data.length > 0) {
        data = data[0];
        data.title = 'Sofies keuken - een recept';
        res.render('recept.ejs',data);
    }
    else {
        res.status(404).render('error.ejs',{title: 'recept niet gevonden'});
    }
};