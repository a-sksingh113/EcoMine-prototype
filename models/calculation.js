const mongoose = require('mongoose');

const CalculationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    mineName: { type: String, required: true },
    AD_excavation: { type: Number, required: true },
    AD_transportation: { type: Number, required: true },
    AD_equipment: { type: Number, required: true },
    Absorption_trees: { type: Number, required: true },
    carbonFootprint: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Calculation', CalculationSchema);
