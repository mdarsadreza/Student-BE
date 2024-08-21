module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define("student", {
        ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        school: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        sex: {
            type: DataTypes.CHAR(1),
            allowNull: true
        },
        age: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        address: {
            type: DataTypes.STRING(5),
            allowNull: true
        },
        famsize: {
            type: DataTypes.STRING(5),
            allowNull: true
        },
        Pstatus: {
            type: DataTypes.CHAR(1),
            allowNull: true
        },
        Medu: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        Fedu: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        Mjob: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        Fjob: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        reason: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        guardian: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        traveltime: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        studytime: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        failures: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        schoolsup: {
            type: DataTypes.STRING(3),
            allowNull: true
        },
        famsup: {
            type: DataTypes.STRING(3),
            allowNull: true
        },
        paid: {
            type: DataTypes.STRING(3),
            allowNull: true
        },
        activities: {
            type: DataTypes.STRING(3),
            allowNull: true
        },
        nursery: {
            type: DataTypes.STRING(3),
            allowNull: true
        },
        higher: {
            type: DataTypes.STRING(3),
            allowNull: true
        },
        internet: {
            type: DataTypes.STRING(3),
            allowNull: true
        },
        romantic: {
            type: DataTypes.STRING(3),
            allowNull: true
        },
        famrel: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        freetime: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        goout: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        Dalc: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        Walc: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        health: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        absences: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        G1: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        G2: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        G3: {
            type: DataTypes.TINYINT,
            allowNull: true
        }
    }, {
        tableName: 'student',
        timestamps: false
    });
    return Student;
};
