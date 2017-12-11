'use strict';
// const {ObjectId} = require('mongoose').Types;
const Company = require('../../db/models/company');

module.exports = {
  async companyListGET(req, res, next) {
    try {
      const companies = await Company.find().exec();
      res.send(companies);
    } catch (error) {
      next(error);
    }
  },

  // async userByIdGET(req, res, next) {
  //   try {
  //     const {withPassword} = req.query;
  //     const user = await User.findOneUser({_id: new ObjectId(req.params.id)}, withPassword === 'true').exec();
  //     user ? res.send(user) : next();
  //   } catch (error) {
  //     next(error);
  //   }
  // },
  //
  // async userDataGET(req, res, next) {
  //   try {
  //     const userData = await User.findUserData(ObjectId(req.params.id)).exec();
  //     userData ? res.send(userData) : next();
  //   } catch (error) {
  //     next(error);
  //   }
  // },
  //
  // async userCreatePOST(req, res, next) {
  //   try {
  //     const userData = await User.create(req.body);
  //     userData ? res.send(_omit(userData.toObject(), ['password'])) : next();
  //   } catch (error) {
  //     next(error);
  //   }
  // },
  //
  // async userUpdatePUT(req, res, next) {
  //   try {
  //     const userData = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, select: '-password'}).exec();
  //     userData ? res.send(userData) : next();
  //   } catch (error) {
  //     next(error);
  //   }
  // },
  //
  // async userByIdDELETE(req, res, next) {
  //   try {
  //     console.log('Delete current user id ---------> ', req.params.id);
  //     const result = await User.deleteOne({_id: req.params.id});
  //     res.send(result);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
};