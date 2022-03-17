module.exports = function (router) {
var version = "mmvp";

router.post('/' + version + '/installer/subcontractor', function (req, res)
{
      var installer_type = req.session.data['installer_type']
      if (installer_type == "installer") {
      res.redirect(301, '/' + version + '/installer/chargepoint-model')
      } else {
      res.redirect(301, '/' + version + '/installer/confirm-subcontractor')
    }})

router.post('/' + version + '/landlordReg/type-of-landlord', function (req, res){
            var landlord_type = req.session.data['landlord_type']
            if (landlord_type == "landlord") {
            res.redirect(301, '/' + version + '/landlordReg/linked-enterprise')
            }  else if (landlord_type == "public") {
            res.redirect(301, '/' + version + '/landlordReg/company-identification')
            } else {
            res.redirect(301, '/' + version + '/landlordReg/company-identification-social')
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
            }
            else if (pmc_landlord_type == "public") {
            res.redirect(301, '/' + version + '/pmcApp/company-identification')
            } else {
            res.redirect(301, '/' + version + '/pmcApp/company-identification-social')
      }})

router.post('/' + version + '/pmcApp/linked-enterprise', function (req, res){
            var linked_type = req.session.data['linked_type']
            if (linked_type == "yes") {
            res.redirect(301, '/' + version + '/pmcApp/id-linked-enterprise')
            } else {
            res.redirect(301, '/' + version + '/PMCApp/company-identification')
      }})

      router.post('/' + version + '/landlordReg/account-type', function (req, res){
            var business_type = req.session.data['business_type']
            if (business_type == "landlord") {
            res.redirect(301, '/' + version + '/landlordReg/email')
            } else if (business_type == "pmc") {
            res.redirect(301, '/' + version + '/pmcReg/email')
            } else {
            res.redirect(301, '/' + version + '/installer/installer-account-guidance')
          }})

      router.post('/' + version + '/pmcReg/account-type', function (req, res){
            var business_type = req.session.data['business_type']
            if (business_type == "pmc") {
            res.redirect(301, '/' + version + '/pmcReg/email')
          } else if (business_type == "landlord") {
            res.redirect(301, '/' + version + '/landlordReg/email')
            } else {
            res.redirect(301, '/' + version + '/installer/installer-account-guidance')
      }})

      router.post('/' + version + '/installer/account-type', function (req, res){
            var business_type = req.session.data['business_type']
            if (business_type == "pmc") {
            res.redirect(301, '/' + version + '/pmcReg/email')
          } else if (business_type == "landlord") {
            res.redirect(301, '/' + version + '/landlordReg/email')
            } else {
            res.redirect(301, '/' + version + '/installer/installer-account-guidance')
      }})

      router.post('/' + version + '/landlordApp/off-street-parking', function (req, res){
            var parking = req.session.data['parking']
            if (parking == "yes") {
            res.redirect(301, '/' + version + '/landlordApp/declaration')
            } else {
            res.redirect(301, '/' + version + '/landlordApp/cannot-proceed')
      }})

      router.post('/' + version + '/pmcApp/off-street-parking', function (req, res){
            var parking = req.session.data['parking']
            if (parking == "yes") {
            res.redirect(301, '/' + version + '/pmcApp/declaration')
            } else {
            res.redirect(301, '/' + version + '/pmcApp/cannot-proceed-parking')
      }})


router.post('/' + version + '/installer/date-of-completion', function (req, res) {
                res.redirect(301, '/' + version + '/installer/installation-cost')
        })

// choose-grant-type
router.post('/' + version + '/landlordApp/choose-grant', function (req, res){
                      var parking = req.session.data['choose-grant']
                      if (parking == "yes") {
                      res.redirect(301, '/' + version + '/landlordApp/off-street-parking')
                      } else {
                      res.redirect(301, '/' + version + '/landlordApp/commercial/staff-and-fleet')
                }})

router.post('/' + version + '/pmcApp/choose-grant', function (req, res){
                      var parking = req.session.data['choose-grant']
                      if (parking == "yes") {
                      res.redirect(301, '/' + version + '/pmcApp/off-street-parking')
                      } else {
                      res.redirect(301, '/' + version + '/pmcApp/commercial/staff-and-fleet')
                }})

// off-street-parking - no - commercial journey
                router.post('/' + version + '/landlordApp/commercial/off-street-parking', function (req, res){
                      var parking = req.session.data['parking']
                      if (parking == "yes") {
                      res.redirect(301, '/' + version + '/landlordApp/commercial/declaration')
                      } else {
                      res.redirect(301, '/' + version + '/landlordApp/commercial/cannot-proceed')
                }})
// staff and fleet - no - commercial journey
                router.post('/' + version + '/landlordApp/commercial/staff-and-fleet', function (req, res){
                      var fleet = req.session.data['fleet']
                      if (fleet == "yes") {
                      res.redirect(301, '/' + version + '/landlordApp/commercial/off-street-parking')
                      } else {
                      res.redirect(301, '/' + version + '/landlordApp/commercial/cannot-proceed2')
                }})

// off-street-parking - no - commercial journey
              router.post('/' + version + '/pmcApp/commercial/off-street-parking', function (req, res){
                      var parking = req.session.data['parking']
                      if (parking == "yes") {
                      res.redirect(301, '/' + version + '/pmcApp/commercial/declaration')
                      } else {
                        res.redirect(301, '/' + version + '/pmcApp/commercial/cannot-proceed')
              }})

// staff and fleet - no - commercial journey
             router.post('/' + version + '/pmcApp/commercial/staff-and-fleet', function (req, res){
                      var fleet = req.session.data['fleet']
                      if (fleet == "yes") {
                      res.redirect(301, '/' + version + '/pmcApp/commercial/off-street-parking')
                      } else {
                      res.redirect(301, '/' + version + '/pmcApp/commercial/cannot-proceed2')
              }})

}
