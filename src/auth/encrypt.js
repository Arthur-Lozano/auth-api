'use strict';


const user = require('../models/users.js');
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const cors = require('cors');
const mongoose = require('mongoose');
//Signin a Route -- login with username and password
//test with httpie
//http post :3000/signin -a john:foo
module.exports = async function  encryptUser(req, res, next) {
  try {
    // immediately pull the password off of the req body on sign up
    // then hash it and put it back on the req body
    req.body.password = await bcrypt.hash(req.body.password, 5);
    // instantiation of our new user with a username and a password
    const user = new Users(req.body);
    console.log('after instantiation of model:', user);
    // save that user to the database
    const record = await user.save(req.body);
    console.log('after saving the record in the db', record);
    res.status(200).json(record); 
    next();
  } catch {
    // if our hashing doesn't work for some reason on the bcrypt side, return an error to the user
    res.status(500).send('error creating user');
  }
}

