const db = require('../dbAuthenticate')
const AppError = require('../utils/App-Error')
const StudentModels = db.StudentModel
const csv = require('csv-parser');

const findAllStudents = async () => {
    try {
        return await StudentModels.findAll()
    } catch (error) {
        throw new AppError('Something went wrong!!', 500);
    }
};

const findByStudent = async (ID) => {
    try {
        const student = await StudentModels.findOne({
            where: { ID }
        });

        if (!student) {
            throw new AppError('Student not found', 404);
        }

        return student;
    } catch (error) {
        throw new AppError('Something went wrong!!', 500);
    }
};

const saveCSVFileIntoDB = async (readableFileStream, res) => {
    const results = [];
    readableFileStream
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            try {
                await StudentModels.bulkCreate(results, {
                    validate: true,
                });
                res.send('File uploaded and data saved successfully.');
            } catch (error) {
                res.status(500).send('Error saving data to the database: ' + error.message);
            }
        });
};

module.exports = {
    findAllStudents,
    findByStudent,
    saveCSVFileIntoDB,
}