module.exports = {


	// home: function(req, res) {
 //        res.sendFile('html/index.html', { root: './public' });
 //    },

    applicants: function(req, res) {
        res.sendFile('html/applicants.html', { root: './public' });
    },
    applicant: function(req, res) {
        // Here is where you need to get the data
        // from the post body and store it in the database
        res.send('No funciona');
    }
};