const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//Pay Immigration Health Surcharge
router.get('/ihsPay', function (req, res){
    var payingForIhs = req.session.data['payingForIhs']

    if ( payingForIhs == 'Yes') {
      res.redirect('/ihs/reference-number');
    } else {
        res.redirect('/ihs/pay-ihs');
    }
})

module.exports = router
