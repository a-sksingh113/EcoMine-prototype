const Calculation = require('../models/calculation');

exports.calculateFootprint = async (req, res) => {
    try {
        const { mineName, AD_excavation, AD_transportation, AD_equipment, Absorption_trees } = req.body;

        const carbonFootprint = (AD_excavation * 0.1) + (AD_transportation * 0.05) + (AD_equipment * 0.2) - (Absorption_trees * 0.02);

        const calculation = new Calculation({
            user: req.user.id,
            mineName,
            AD_excavation,
            AD_transportation,
            AD_equipment,
            Absorption_trees,
            carbonFootprint
        });

        await calculation.save();
        res.status(200).json({ carbonFootprint });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error calculating carbon footprint' });
    }
};
