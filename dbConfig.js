module.exports = {
    
    host: "localhost",
    user: "root", //update your mysql username
    password: "arsadreza", //update your mysql password
    database: "studentss", ///Create databse name CRM 
    dialect: 'mysql',
    
    pool: {
        max: 5,
        min: 0,
        acquire: 80000,
        idle: 30000
    }
}