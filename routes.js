var controller = require('./controllers/controller.js')

module.exports = (app) => {


    // app.get('/', controller.home);

    // displays a list of applicants
    app.get('/applicants', controller.applicants);

    // creates an applicant connected to controller
    app.post('/applicant', controller.applicant);

};
