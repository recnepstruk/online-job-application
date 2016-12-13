var Applicant = require('../models/applicants.js');

module.exports = {


    home: function(req, res) {
        res.sendFile('html/index.html', { root: './public' });
    },

    applicants: function(req, res) {
        res.sendFile('html/applicants.html', { root: './public' });
    },
    getApplicants: function(req, res) {
        Applicant.find({}, (err, docs) => {
            if (err) {
                console.log("Error getting songs from database: ", err);
                res.send(err);
            } else {
                console.log("applicant from DB: ", docs);
                res.send(docs);
            }
        });
    },

        profile: function(req, res) {
        res.send('html/profile.html', { root: './public' });
    },

    applicant: function(req, res) {
        // Here is where you need to get the data
        // from the post body and store it in the database
        req.body.skills = req.body.skills.split(', ');
        var newApplicant = new Applicant(req.body);
        newApplicant.save((err, doc) => {
            if (err) {
                console.log("Error saving applicant to database: ", err);
                res.send(err);
            } else {
                console.log("Applicant saved to DB: ", doc);
                res.redirect('/applicants');

            }
        });

    }

};
