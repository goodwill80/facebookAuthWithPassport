module.exports= {

//Make sure you change your mongoDB url too!
  database: 'mongodb://root:password123@ds053216.mlab.com:53216/digiskills',
  port: 2000,
  secretKey: 'hello12345678',
  facebook: {
    clientID: '***********',
    clientSecret: '***********',
    profileFields: ['emails', 'displayName'] ,
    callbackURL: 'http://localhost:2000/auth/facebook/callback',
    passReqToCallback: true
  }

}
