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
      return res.status(203).json({message: 'Invalid username.'});
    }
    else {
      // Add the found user id to res.locals so that it can be used by the next middleware.
      const { _id, first_name, username, password, household_id } = result.rows[0];
      res.locals.userID = _id;
      res.locals.firstName = first_name;
      res.locals.username = username;
      res.locals.userPw = password;
      res.locals.householdID = household_id;
      // console.log(`houshold_id: ${household_id}`);
      // console.log(`res.locals.householdID: ${res.locals.householdID}`);
      return next();
    }
  });
};

authController.validatePassword = (req, res, next) => {
  const { password } = req.body; 
  if (password === res.locals.userPw) return next(); 
  else return res.status(203).json({message: 'Invalid password.'});
}

// query database to find out if a record already exists on users table with that username
authController.checkUniqueness = (req, res, next) => {
  const { username } = req.body;
  // console.log('Name received at authController.checkUniqueness: ', req.body);
  res.locals.allUsers.forEach((user) => {
    if (user.username === username) {
      console.log('An account with that username already exists. Please log in or try a different username.')
      return res.status(203).json({message: 'An account with that username already exists. Please log in or try a different username.'});
    }
  });
  console.log('Unique username');
  return next();
};

authController.addUser = (req, res, next) => {
  // add this user to the database. We want to get their user id.
  const { firstName, username } = req.body;
  const { hashPw } = res.locals;
  // console.log('Name and password received at authController.addUser: ', name, password);

  // query for the _id on users table that matches the received name and password
  const query = 
    `INSERT INTO users (first_name, username, password)
    VALUES ($1, $2, $3)
    RETURNING *`;
  const values = [firstName, username, hashPw ];

  // console.log("the addUser query: ", query, "values: ", values);
  db.query(query, values, (error, result) => {
    if (error) {
      console.log('addUser ERROR: ', error);
      return next(error);
    }

    console.log('addUser query result: ', result.rows);
    const {_id, first_name, username, household_id } = result.rows[0];
    res.locals.userID = _id;
    res.locals.firstName = first_name;
    res.locals.username = username;
    res.locals.householdID = household_id;
    return next();
  });
};

authController.logout = (req, res, next) => {
  try {
    const query = `DELETE FROM sessions WHERE cookie_id = ($1)`;
    const params = [req.cookies.ssid];
    res.clearCookie('ssid');
    db.query(query, params, (error, result) => {
      if (error) return next({ log: `middleware error caught in authController.logout: ${error}` });
      return next();
    })
  } catch (error) {
    return next({ log: `middleware error caught in authController.logout: ${error}` });
  }
  
}
// --> make a cookie
// res.cookie('user_id', 'queried user id')
// information on user returned from database
// req.cookies.userId = user.id; 

authController.setCookie = (req, res, next) => {
  // receives user id on res.locals (?)
  // sets a cookie
  res.cookie('ssid', res.locals.userID); //->  res.cookie(key,value)
  console.log ('Cookie has been created!', res.cookie);
  return next();
};

authController.createSession = (req, res, next) => {
  const query = `INSERT INTO sessions (cookie_id, expires) VALUES ($1, current_timestamp + interval '1 hour');`;
  const params = [res.locals.userID];
  // console.loge(``)
  db.query(query, params, (error, result) => {
    if (error) return next({log: `middleware error caught in authController.createSession: ${error}`});
    console.log(`session created with id ${res.locals.userID}`);
    return next();
  })
};

authController.isLoggedIn = (req, res, next) => {
  try {
    if (!req.cookies.ssid) return res.status(203).json('User logged out. Please login.');
    const query = `SELECT cookie_id from sessions
      WHERE cookie_id = ($1) AND expires >= current_timestamp`;
    const params = [req.cookies.ssid];
    db.query(query, params, (error, result) => {
      console.log('query result:' + result)
      if (error) return next({log: `middleware error caught in authController.isLoggedIn: ${error}`});
      if (!result.rows.length) return res.status(203).json({message: 'User logged out. Please login.'});
      return next();
    });
  } catch (error) {
    return next({ log: `middleware error caught in authController.isLoggedIn: ${error}` });
  }
}

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