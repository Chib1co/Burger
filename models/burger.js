const orm = require('../config/orm.js');

//correct data
//create the code
// that will call the ORM functions using burger specific input for the ORM

const burger = {
    selectAll(cb) {
      orm.selectAll('burgers', (res) => cb(res));
    },
    // The variables cols and vals are arrays.
    insertOne(cols, vals, cb) {
      orm.insertOne('burgers', cols, vals, (res) => cb(res));
    },
    updateOne(objColVals, condition, cb) {
      orm.updateOne('burgers', objColVals, condition, (res) => cb(res));
    },
    // delete(condition, cb) {
    //   orm.delete('burgers', condition, (res) => cb(res));
    // },
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  