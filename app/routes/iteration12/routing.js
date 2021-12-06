module.exports = function (router) {
var version = "iteration12";

router.post('/' + version + '/installer/subcontractor', function (req, res)
{
      var installer_type = req.session.data['installer_type']
      if (installer_type == "installer") {
      res.redirect(301, '/' + version + '/installer/dateOfCompletion')
      } else {
      res.redirect(301, '/' + version + '/installer/confirmSubcontractor')
    }})

router.post('/' + version + '/landlordReg/type-of-landlord', function (req, res){
            var landlord_type = req.session.data['landlord_type']
            if (landlord_type == "landlord") {
            res.redirect(301, '/' + version + '/landlordReg/linked-enterprise')
            } else {
            res.redirect(301, '/' + version + '/landlordReg/company-identification')
      }})

router.post('/' + version + '/landlordReg/linked-enterprise', function (req, res){
                  var landlord_type = req.session.data['linked_type']
                  if (landlord_type == "yes") {
                  res.redirect(301, '/' + version + '/landlordReg/id-linked-enterprise')
                  } else {
                  res.redirect(301, '/' + version + '/landlordReg/company-identification')
      }})

router.post('/' + version + '/pmcApp/type-of-landlord', function (req, res){
                        var pmc_landlord_type = req.session.data['pmc_landlord_type']
                        if (pmc_landlord_type == "landlord") {
                        res.redirect(301, '/' + version + '/pmcApp/linked-enterprise')
                        } else {
                        res.redirect(301, '/' + version + '/pmcApp/company-identification')
      }})

router.post('/' + version + '/pmcApp/linked-enterprise', function (req, res){
                        var landlord_type = req.session.data['linked_type']
                        if (landlord_type == "yes") {
                        res.redirect(301, '/' + version + '/pmcApp/id-linked-enterprise')
                        } else {
                        res.redirect(301, '/' + version + '/pmcApp/company-identification')
      }})

router.post('/' + version + '/landlordReg/account-type', function (req, res){
                        var business_type = req.session.data['business_type']
                        if (business_type == "landlord") {
                        res.redirect(301, '/' + version + '/landlordReg/email')
                        } else {
                        res.redirect(301, '/' + version + '/pmcReg/email')
    }})

router.post('/' + version + '/pmcReg/account-type', function (req, res){
                            var business_type = req.session.data['business_type']
                            if (business_type == "pmc") {
                            res.redirect(301, '/' + version + '/pmcReg/email')
                            } else {
                            res.redirect(301, '/' + version + '/landlordReg/email')
        }})


    router.post('/' + version + '/installer/dateOfCompletion', function (req, res) {
                    res.redirect(301, '/' + version + '/installer/installation-cost')
            })


}
