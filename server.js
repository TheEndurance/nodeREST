import express from 'express';
import mongoose from 'mongoose';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config.js';
import Book from './models/bookModel';
import {
  SeedBooks
} from './booksJson';

const db = mongoose.connect('mongodb://Rawa:password@ds249418.mlab.com:49418/delish');
mongoose.Promise = global.Promise;


const app = express();
const port = process.env.PORT || 3000;
// SeedBooks(); Need to only call this once to seed the database
//create express router
const bookRouter = express.Router();

//call route method on router and pass the route /Books
bookRouter.route('/Books')
  .get(function (req, res) {
    console.log("we are in here");
    Book.find({}, function (err, books) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(books)
      }
    });
  });

//call the use method on app and pass it the router for /api endpoints
app.use('/api', bookRouter);

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/', (req, res) => {
  res.send('Hello Guys')
})

app.listen(port, () => {
  console.log('Listening on port:' + port);
});