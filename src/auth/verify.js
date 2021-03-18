'use strict';

const express = require('express');




module.exports = async function verifyUser(req, res, next) {
  let basicHeaderParts = req.headers.authorization.split(' ');
  let encodedString = basicHeaderParts.pop();
  let decodedString = base64.decode(encodedString);
  let [username, password] = decodedString.split(':');//username, password

  try {
    const user = await Users.findOne({ username: username })
    const valid = await bcrypt.compare(password.user.password);
    if (valid) {
      res.status(200).json(user);
      next();
    } else {
      next('User does not exist')
    }
  } catch (error) { res.status(403).send("Invalid Login"); }
}