const express = require('express');
const router = express.Router();
const {
    getAllData,
    getDataById,
    addData,
    updateData,
    deleteData
} = require('../controllers/dataController');

// Route to get all data
router.get('/', getAllData);

// Route to get data by ID
router.get('/:id', getDataById);

// Route to add new data
router.post('/', addData);

// Route to update data by ID
router.put('/:id', updateData);

// Route to delete data by ID
router.delete('/:id', deleteData);

module.exports = router;
