const db = require('../models/freshModel.js');

const authController = {};

authController.getAllUsers = (req, res, next) => {
  const query = 'SELECT username FROM users';

  db.query(query, (error, result) => {
    if (error) {
      console.log('getAllUsers ERROR: ', error);
      return next(error);
    }

    console.log('getAllUsers query result: ', result.rows);
    res.locals.allUsers = result.rows;
    return next();
  });
}

authController.findUser = (req, res, next) => {
  // query our database with username and password to find this user. We want to get their user id.
  const { username } = req.body;

  // query for the _id on users table that matches the received name and password
  const query = {
    text: `SELECT _id, first_name, username, password, household_id
    FROM users
    WHERE username=$1`,
    values: [username]
  }

  db.query(query, (error, result) => {
    if (error) {
      console.log('findUser ERROR: ', error);
      return next(error);
    }

    console.log('findUser query result: ', result.rows);
    // if the response from the database is an empty array, that means no user was found with that name and password
    if (!result.rows.length) {
      return res.status(203).send('Invalid username.');
    }
    else {
      // Add the found user id to res.locals so that it can be used by the next middleware.
      const { _id, first_name, username, password, household_id } = result.rows[0];
      res.locals.userId = _id;
      res.locals.firstName = first_name;
      res.locals.username = username;
      res.locals.userPw = password;
      res.locals.householdId = household_id;
      return next();
    }
  });
};

authController.validatePassword = (req, res, next) => {
  const { password } = req.body; 
  if (password === res.locals.userPw) return next(); 
  else return res.status(203).send('Invalid password.');
}

// query database to find out if a record already exists on users table with that username
authController.checkUniqueness = (req, res, next) => {
  const { username } = req.body;
  // console.log('Name received at authController.checkUniqueness: ', req.body);
  res.locals.allUsers.forEach((user) => {
    if (user.username === username) {
      console.log('An account with that username already exists. Please log in or try a different username.')
      return res.status(203).send('An account with that username already exists. Please log in or try a different username.');
    }
  });
  console.log('Unique username');
  return next();
};

authController.addUser = (req, res, next) => {
  // add this user to the database. We want to get their user id.
  const { firstName, username, password } = req.body;
  // console.log('Name and password received at authController.addUser: ', name, password);

  // query for the _id on users table that matches the received name and password
  const query = 
    `INSERT INTO users (first_name, username, password)
    VALUES ($1, $2, $3)
    RETURNING *`;
  const values = [firstName, username, password];

  // console.log("the addUser query: ", query, "values: ", values);
  db.query(query, values, (error, result) => {
    if (error) {
      console.log('addUser ERROR: ', error);
      return next(error);
    }

    console.log('addUser query result: ', result.rows);
    const {_id, first_name, username } = result.rows[0];
    res.locals.userId = _id;
    res.locals.firstName = first_name;
    res.locals.username = username;
    return next();
  });
};


// --> make a cookie
// res.cookie('user_id', 'queried user id')
// information on user returned from database
// req.cookies.userId = user.id; 

authController.setCookie = (req, res, next) => {
  // receives user id on res.locals (?)
  // sets a cookie
  res.cookie('userId', res.locals.userId); //->  res.cookie(key,value)
  console.log ('Cookie has been created!', res.cookie);
  return next();
};

// TODO: this is Google OAuth stuff.
authController.getToken = (req, res, next) => {
  console.log('Executing getToken');
  // const { token }  = req.body
  // const ticket = await client.verifyIdToken({
  //   idToken: token,
  //   audience: credentials.ClientID
  // });
  
  // const { name, email, picture } = ticket.getPayload();
  return next();
}


module.exports = authController;