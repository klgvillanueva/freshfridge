const bcrypt = require('bcrypt');

const bcryptController = {};

bcryptController.hashPassword = (req, res, next) => {
  const { password } = req.body;
  const SALT_ROUNDS = 10;
  bcrypt.hash(password, SALT_ROUNDS, (err, hash) => {
    if (err) return next({log: `middleware error in bcryptController.hashPassword ${err}`});
    res.locals.hashPw = hash;
    return next();
  });
};

bcryptController.verifyPassword = (req, res, next) => {
  const { password } = req.body;
  const { userPw } = res.locals;
  bcrypt.compare(password, userPw, (err, result) => {
    if (err) return next({ log: `middleware error in bcryptController.verifyPassword ${err}` });
    if (result) return next();
    else return res.status(203).send('Invalid password.');
  });
}


module.exports = bcryptController;