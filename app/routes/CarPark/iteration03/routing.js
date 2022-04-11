module.exports = function (router) {

  var appName = "CarPark";
  var apV = "03";
  var appVersion = "iteration"+apV;
  var installerModule2 = "installer-2";
  var landlordModule = "landlord-application"
  var smeModule = "sme-reg";
  var smeAppModule = "sme-app"
  var pmcAppModule = "pmc-app"



  var installerPath = '/' + appName + '/' + appVersion + '/' + installerModule2;
  var landlordPath = '/' + appName + '/' + appVersion + '/' + landlordModule;
  var smePath = '/' + appName + '/' + appVersion + '/' + smeModule;
  var smeAppPath = '/' + appName + '/' + appVersion + '/' + smeAppModule;
  var basicPath = '/' + appName + '/' + appVersion;
  var pmcAppPath = '/' + appName + '/' + appVersion + '/' + pmcAppModule;



  //Who completed the job - company or sub-subcontractor for claiming a grant journey
  router.post('/03/installation-job', function (req, res)
  {
    if (req.session.data['installer_type'] == "installer") {
      res.redirect(installerPath+'/date-of-completion');
    } else {
      res.redirect(installerPath+'/confirm-subcontractor');
    }
  })

  //landlord - number of parking spaces
  router.post('/landlord-parking', function (req, res)
  {
    if (req.session.data['parking-spaces1'] == "1 to 4") {
      res.redirect(landlordPath + '/ineligible-parking');
    } else {
      res.redirect(landlordPath + '/parking');
    }
  })


  //What type of account does the user need
  router.post('/your-account-type', function (req, res){
        if (req.session.data['business_type'] == "landlord") {
        res.redirect(basicPath + '/landlordReg/email')
        } else if (req.session.data['business_type'] == "pmc") {
        res.redirect(basicPath + '/pmc-reg/email')
      } else if (req.session.data['business_type'] == "sme") {
      res.redirect(smePath + '/email')
        } else {
        res.redirect(installerPath + '/installer-account-guidance')
      }})

      //Is the user a linked enterprise
      router.post('/linked-enterprise-choice', function (req, res)
      {
        if (req.session.data['linked_type'] == "yes") {
          res.redirect(smePath + '/id-linked-enterprise');
        } else {
          res.redirect(smePath + '/company-identification');
        }
      })

      //SME - Number of employees
      router.post('/no-of-employees', function (req, res){
            if (req.session.data['employees'] == "1 to 9") {
            res.redirect(smePath + '/check-answers')
          } else if (req.session.data['employees'] == "10 to 49") {
            res.redirect(smePath + '/check-answers')
          } else if (req.session.data['employees'] == "50 to 250") {
          res.redirect(smePath + '/check-answers')
            } else {
            res.redirect(smePath + '/cannot-proceed-employees')
          }})

          //SME - Chargepoints for staff or fleet use
          router.post('/staff-or-fleet', function (req, res)
          {
            if (req.session.data['fleet'] == "yes") {
              res.redirect(smeAppPath + '/declaration');
            } else {
              res.redirect(smeAppPath + '/cannot-proceed-staff');
            }
          })

          //SME - number of parking spaces
          router.post('/sme-parking-spaces', function (req, res)
          {
            if (req.session.data['parking-spaces'] == "1 to 4") {
              res.redirect(smeAppPath + '/cannot-proceed-parking');
            } else {
              res.redirect(smeAppPath + '/parking');
            }
          })

          //PMC - number of parking spaces
          router.post('/pmc-parking-spaces', function (req, res)
          {
            if (req.session.data['parking-spaces'] == "1 to 4") {
              res.redirect(pmcAppPath + '/cannot-proceed-parking');
            } else {
              res.redirect(pmcAppPath + '/parking');
            }
          })
}
