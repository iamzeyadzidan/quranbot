const app = require('express')();

app.get('/', (req, res) => res.send('Zeyad Zidan'));

module.exports = () => {
  app.listen(3000);
}