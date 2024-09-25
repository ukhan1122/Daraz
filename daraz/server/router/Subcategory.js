const express = require('express');
const Subcategory = require('../model/subcategory');
const Categorymodel = require('../model/Category');
const router = express.Router();

router.get('/subcatgory/:id', async (req, res) => {
    try {
        const categoryid = req.params.id;
        console.log("Category ID: ", categoryid);

        const category = await Categorymodel.findById(categoryid).populate('subcatgories');  // Correctly populate subcategories

        // Check if category or its subcatgories are not found
        if (!category || !category.subcatgories || category.subcatgories.length === 0) {
            return res.status(404).json({ message: "No subcategories found for this category" });
        }

        // Return the populated subcatgories
        res.status(200).json({ message: "Successfully retrieved subcategories", subcategories: category.subcatgories });

    } catch (error) {
        console.error("Error while fetching subcategory:", error);
        res.status(500).json({ message: "Error while fetching subcategory", error });
    }
});

module.exports = router;
