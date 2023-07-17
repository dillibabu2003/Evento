const { builtinModules } = require('module');

const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const passport = require('passport');

 
passport.use(new GoogleStrategy({
    clientID:"745379280216-v4v8t1h7lckgumkj36ge10p04989gpon.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL: "http://localhost:5000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
    console.log(profile);
    done(null,profile);
  }
));
passport.serializeUser((user,done)=>{
    done(null,user)
})
passport.deserializeUser((user,done)=>{
    done(null,user)
})
module.exports=passport;///wevwegwefwfw