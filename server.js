import express from 'express'; 
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/', (req, res) => {
    res.send('Hello Guys')
})

app.listen(port, () => {
  console.log('Listening on port:' + port);
});