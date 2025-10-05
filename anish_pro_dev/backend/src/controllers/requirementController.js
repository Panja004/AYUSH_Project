const DocumentRequirement = require("../models/DocumentRequirement");

// Fetch all required documents for a given sector and application type
async function getRequirementsBySector(req, res) {
  try {
    const { sector, application_type } = req.params;

    const requirements = await DocumentRequirement.findOne({
      sector,
      application_type,
    }).lean();

    if (!requirements) {
      return res.status(404).json({
        message: `No document requirements found for ${sector} (${application_type})`,
      });
    }

    res.status(200).json({
      sector,
      application_type,
      total_required: requirements.requirements.length,
      requirements: requirements.requirements,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching requirements", error: error.message });
  }
}

module.exports = { getRequirementsBySector };
