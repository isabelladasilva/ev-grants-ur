module.exports = function (router) {

var appName = "HC";
var appVersion = "iteration10";
var customerModule = "customer";
var installerModule = "installer";

var customerPath = '/' + appName + '/' + appVersion + '/' + customerModule;
var installerPath = '/' + appName + '/' + appVersion + '/' + installerModule;
var installerAppSetup = installerPath + '/application-setup';
var installerClaimGrant = installerPath + '/claim-grant';


//Have you claimed the EVHS before?
router.post('/grant-claimed', function (req, res) {

  // Make a variable and give it the value
  var grantClaimed = req.session.data['grant-claimed']

  // Check whether the variable matches a condition
  if (grantClaimed == "Yes") {
    // Send user to next page
    res.redirect(customerPath+'/ineligible');
  } else {
    // Send user to about residential property page
    res.redirect(customerPath+'/residential-property');
  }
})


//Is your application for a residential property?
router.post('/residential', function (req, res) {

    // Make a variable and give it the value
    var residentialProperty = req.session.data['residential-property']

    // Check whether the variable matches a condition
    if (residentialProperty == "Yes") {
      // Send user to next page
      res.redirect(customerPath+'/off-street-parking');
    } else {
      // Send user to ineligible page
      res.redirect(customerPath+'/ineligible');
    }
})




//Do you own or rent the property?
router.post('/propertyownership', function (req, res) {

      // Make a variable and give it the value
      // why write ownershipOfProperty when you can write OOP?
      var OOP = req.session.data['ownership-of-property']

      // var XYZ = "some value here";
      // res.redirect(XYZ);
      // The above wont work, but it will write the value of XYZ to the screen in the error for you

      // Check whether the variable matches a condition
      if (OOP == "own") {
        // Send user to own a flat
        res.redirect(customerPath+'/own-a-flat');
      } else {
        // Send user to property type page
        res.redirect(customerPath+'/property-type');
      }
})


//Do you own an apartment?
router.post('/own-apartment', function (req, res) {

      // Make a variable and give it the value
      // why write ownershipOfProperty when you can write OOP?
      var ownAFlat = req.session.data['own-appartment']

      // Check whether the variable matches a condition
      if (ownAFlat == "yes") {
        // Send user to own a flat
        res.redirect(customerPath+'/consent-to-install');
      } else {
        // Send user to property type page
        res.redirect(customerPath+'/ineligible');
      }
})


//How are you responsible for your EV
router.post('/own-vehicle', function (req, res) {

      // Make a variable and give it the value
      // why write ownershipOfProperty when you can write OOP?
      var VResposible = req.session.data['vehicle-ownership']

      // Check whether the variable matches a condition
      if (VResposible == "yes") {
        // Send user to own a flat
        res.redirect(customerPath+'/vehicle-information');
      } else {
        // Send user to property type page
        res.redirect(customerPath+'/ineligible');
      }
})


//Do you know Vehicle resgistration number
router.post('/vehicle-info', function (req, res) {

      // Make a variable and give it the value
      // why write ownershipOfProperty when you can write OOP?
      var VInfo = req.session.data['vehicle-information']

      // Check whether the variable matches a condition
      if (VInfo == "yes") {
        // Send user to own a flat
        res.redirect(customerPath+'/vehicle-registration');
      } else {
        // Send user to property type page
        res.redirect(customerPath+'/vehicle-manufacture');
      }
})


//Who completed the job - company or sub-subcontractor for claiming a grant journey
router.post(installerClaimGrant+'/who-completed-job', function (req, res)
{
      var InstallerType = req.session.data['installer_type']
      if (InstallerType == "installer") {
      res.redirect(installerClaimGrant+'/date-of-completion')
      } else {
      res.redirect(installerClaimGrant+'/confirm-subcontractor')
    }})



}
