'use strict';
const router = require('express').Router();
const companyHandler = require('./handlers/company');

/**
 * Get users list
 */
router.get('/companies', companyHandler.companyListGET);

/**
 * Get user by id
 */
// router.get('/users/:id', userHandler.userByIdGET);
//
// /**
//  * Get user data
//  */
// router.get('/users/:id/verify', userHandler.userDataGET);
//
// /**
//  * Create user
//  */
// router.post('/users', userHandler.userCreatePOST);
//
// /**
//  * Update user
//  */
// router.put('/users/:id', userHandler.userUpdatePUT);
//
// /**
//  * Delete user by id
//  */
// router.delete('/users/:id', userHandler.userByIdDELETE);

module.exports = router;
