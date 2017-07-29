var thingCtrl = require('./thingCtrl'),
	path = require('path');

module.exports = (app) => {


//
// ────────────────────────────────────────────────────────────────  ──────────
//   :::::: B A C K   E N D   R O U T E S : :  :   :    :      :          :
// ──────────────────────────────────────────────────────────────────────────
//

	app.get('/api/things', thingCtrl.get); // get one
	app.get('/api/things/:id', thingCtrl.get); // get many
	app.post('/api/things', thingCtrl.upsert); // create
	app.post('/api/things/:id', thingCtrl.upsert); // update
	app.get('*', function (req, res) {
		console.log('getCatchAll');
		res.sendFile(path.resolve(__dirname + '/../../public/index.html'));
	});
};