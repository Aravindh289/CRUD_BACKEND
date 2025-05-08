const Data = require('../models/data');

// Get all data
const getAllData = async (req, res) => {
    try {
        const data = await Data.find({});
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get specific data by ID
const getDataById = async (req, res) => {
    try {
        const data = await Data.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add new data
const addData = async (req, res) => {
    try {
        const data = await Data.create(req.body);
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update data
const updateData = async (req, res) => {
    try {
        const updates = req.body;
        const updatedData = await Data.findByIdAndUpdate(req.params.id, updates, { new: true, runValidators: true });

        if (!updatedData) {
            return res.status(404).json({ message: "Data not found" });
        }

        res.status(200).json(updatedData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete data
const deleteData = async (req, res) => {
    try {
        const deletedData = await Data.findByIdAndDelete(req.params.id);

        if (!deletedData) {
            return res.status(404).json({ message: "Data not found" });
        }

        res.status(200).json({ message: "Data deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllData,
    getDataById,
    addData,
    updateData,
    deleteData
};
