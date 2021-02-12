const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const methodOverride = require('method-override');

const app = express();
const dbURI = 'mongodb+srv://sameer-ahmed:school@1M@cluster0.rg9cd.mongodb.net/node-js?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));


app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.use(blogRoutes)

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

