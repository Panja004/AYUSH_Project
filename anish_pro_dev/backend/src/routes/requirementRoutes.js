const express = require("express");
const router = express.Router();
const {
  getRequirementsBySector,
} = require("../controllers/requirementController");

// Example: GET /api/requirements/ayurveda/startup_registration
router.get("/:sector/:application_type", getRequirementsBySector);

module.exports = router;
