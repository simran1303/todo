const Sequelize =  require('sequelize');

const sequelize= require('../util/database');

const TodoData = sequelize.define('tododata',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },
    task :{
        type: Sequelize.STRING,
        allowNull:false
    }
})

module.exports = TodoData