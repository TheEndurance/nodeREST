import express from 'express'; 
const app = express();
app.get('/', (req, res) => {
    res.send('Hello Guys')
})
app.listen(4000, () => {
  console.log('Listening');
});