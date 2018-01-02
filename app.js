'use strict'

const Sequelize = require('sequelize')
const sequelize = new Sequelize('node_sequelize', 'node_sequelize', 'node_sequelize_password', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 1000
  },
  timezone: '-05:00'
})

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name'
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name'
  },
  birthday: {
    type: Sequelize.DATE
  }
})

User.sync({ force: true })
  .then(() => {
    User.create({
      firstName: 'John',
      lastName: 'Hancock',
      birthday: new Date().toISOString()
    })
  })