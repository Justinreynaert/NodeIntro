qs = require('querystring');
var resultaat = qs.parse('action=post&dag=maandag&dag=dinsdag&aantal');
console.log(resultaat);