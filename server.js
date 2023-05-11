const express = require('express');
const session = require('express-session');
const mongooseStore = require('connect-mongo');
const passport = require('passport');
const { use } = require('./server/pages/router');

const app = express();

require('./server/config/db');
require('./server/config/passport');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded())
app.use(session({
    name : 'kinopoisk.session',
    secret : 'keyboard cat',
    maxAge : 7 * 60 * 60 * 1000,
    resave : false,
    store : mongooseStore.create({
        mongoUrl : 'mongodb://localhost:27017',
    })
}))
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");

app.use(require('./server/pages/router'))
app.use(require('./server/Genres/router'))
app.use(require('./server/Country/router'))
app.use(require('./server/auth/router'))

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});