import express from 'express';

const app = express();

export { app };

app.get('/', (req, res) => res.send('Zeyad Zidan'));

module.exports = () => {
  app.listen(3000);
}
