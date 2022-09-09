const GoogleStrategy = require('passport-google-oauth2').Strategy;
const passport = require('passport')
const UserModel = require('../model/UserModel')


passport.use(new GoogleStrategy({
  clientID: "959078892775-j765uh1b479arbpst6i07dbto6896lm9.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "http://localhost:5001/api/google/callback",
  passReqToCallback: true
},
  async function (request, accessToken, refreshToken, profile, done) {
    await UserModel.findOrCreate({
      googleId: profile.id,
      firstname: profile.name.givenName,
      lastname: profile.name.familyName,
      phone: null, email: profile.email,
      password: null
    }
      , function (err, user) {
        return done(err, user);
      });
  }
));

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})