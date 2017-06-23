const lame = require('./lame');
const butter = require('buttercms')(lame.APIkey);


const contentFields = [];


module.exports = {
  getContent: (req, res) => {
    butter.content.retrieve(contentFields)
      .then((resp) => res.send(resp.data))
      .catch((resp) => console.log(resp))
  }
}
