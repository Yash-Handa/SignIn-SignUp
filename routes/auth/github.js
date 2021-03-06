const passport = require('passport');

module.exports = router => {
  router.get('/github',
    passport.authenticate('github'));

  router.get('/github/callback', (req, res, next) => {
    passport.authenticate('github', {
      successRedirect: '/dashboard',
      failureRedirect: '/auth/login',
      failureFlash: true,
    })(req, res, next);
  });
};
