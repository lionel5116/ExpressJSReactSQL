const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const eccSchoolschema = new Schema({
    SchoolGradeLevelAssociationNaturalKey:{ type: String},
    SchoolYearNaturalKey:{ type: String },
    EducationOrgNaturalKey:{ type: String },
    GradeLvlTypeNaturalKey:{ type: String}
});

module.exports = mongoose.model('ECCSchool',eccSchoolschema);
