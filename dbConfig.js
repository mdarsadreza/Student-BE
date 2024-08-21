module.exports = {
    
    host: "localhost",
    user: "root", //update your mysql username
    password: "abcdefghi", //update your mysql password
    database: "students", ///Create databse name students 
    dialect: 'mysql',
    
    pool: {
        max: 5,
        min: 0,
        acquire: 80000,
        idle: 30000
    }
}