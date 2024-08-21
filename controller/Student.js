const studentPerformanceService = require('../service/StudentPerformanceService')

const findAll = async (req, res) => {
    try {
        const students = await studentPerformanceService.findAllStudents(res);
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const findById = async (req, res) => {
    try {
        const ID = parseInt(req.params.id, 10);
        const students = await studentPerformanceService.findByStudent(ID);
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const fileUpload = async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    const readableFileStream = require('stream').Readable.from(req.file.buffer);
    return await studentPerformanceService.saveCSVFileIntoDB(readableFileStream, res);
}

module.exports = {
    findAll,
    findById,
    fileUpload,
}