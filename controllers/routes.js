var thingCtrl = require('./thingCtrl'),
    authShit = require('./auth.js');

module.exports = (app) => {
    

//
// ────────────────────────────────────────────────────────────────  ──────────
//   :::::: T H I N G   R O U T E S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────
//

    app.post('/register', authShit.registerUser);

    app.get('/api/things', thingCtrl.get) // get one
    app.get('/api/things/:id', thingCtrl.get) // get many
    app.post('/api/things', thingCtrl.upsert) // create
    app.post('/api/things/:id', thingCtrl.upsert) // update
    
}