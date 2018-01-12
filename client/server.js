const express = require('express');
const firebase = require('firebase');
const fs = require('fs');
const path = require('path');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./services/passport');

const app = express();

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey],
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const config = {
  apiKey: keys.firebaseApiKey,
  authDomain: keys.firebaseAuthDomain,
  databaseURL: keys.firebaseDatabaseURL,
  projectId: keys.firebaseProjectId,
  storageBucket: keys.firebaseStorageBucket,
  messagingSenderId: keys.firebaseMessagingSenderId,
};
firebase.initializeApp(config);

// export const googleProvider = new firebase.auth.GoogleAuthProvider();
// export const ref = firebase.database().ref();
// export const firebaseAuth = firebase.auth;

const indexHTML = (() => fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8'))();

app.use('/public', express.static(path.resolve(__dirname, './public')));

require('./build/dev-server')(app);

app.get('/', (req, res) => {
  res.write(indexHTML);
  res.end();
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
