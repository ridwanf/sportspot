
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');
const firebase = require('firebase');

// const database = firebase.database();

passport.serializeUser((user, done) => {
  done(null, user.googleId);
});

passport.deserializeUser((id, done) => {
  firebase.database().ref(`users/${id}`).once('value').then((user) => {
    done(null, user);
  });
});
passport.use(new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: keys.googleRedirectUrl,
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await firebase.database().ref(`users/${profile.id}`).once('value');
    if (existingUser.val()) {
      done(null, existingUser.val());
    } else {
      const user = await firebase.database().ref(`users/${profile.id}`).set({
        googleId: profile.id,
        name: profile.name,
        email: profile.emails,
        gender: profile.gender,
        photos: profile.photos,
      });
      done(null, user.val());
    }
  },
));
