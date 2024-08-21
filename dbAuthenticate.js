const dbConfig = require('./dbConfig.js')
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.user,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: "mysql",
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        },
        dialectOptions: {
            connectTimeout: 800000
        }
    }
)

 sequelize.authenticate().then(() => {
    console.log('Connected DB');
}).catch(() => {
    console.log('Connection Arsad Error on DB!!');
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize


db.StudentModel = require('./model/Student.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false }).then(() => {
    console.log('Yes reSync done !!');
})


module.exports = db;