const Sequelize = require('sequelize');

const sequelize = new Sequelize('tododatabase','root','1234',{
    dialect:'mysql',
    host:'localhost' 
});

module.exports = sequelize;