var mongoose = require('mongoose');

// create the schema
var applicantSchema = mongoose.Schema({
    name: {type: String, required: true},
    bio: String,
    skills: Array,
    yearExp: Number,
    why: String
});
// create the model
var Applicant = mongoose.model('Applicant', applicantSchema);

// export the model so we can use it in other files
module.exports = Applicant;