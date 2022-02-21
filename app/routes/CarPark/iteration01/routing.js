module.exports = function (router) {

  var appName = "CarPark";
  var apV = "01";
  var appVersion = "iteration"+apV;
  var installerModule = "installer";



  var installerPath = '/' + appName + '/' + appVersion + '/' + installerModule;
  //var installerClaimGrant = installerPath + '/claim-grant';//


  //Who completed the job - company or sub-subcontractor for claiming a grant journey.
  router.post('/installation-job', function (req, res)
  {
    if (req.session.data['installer_type'] == "installer") {
      res.redirect(installerPath+'/date-of-completion');
    } else {
      res.redirect(installerPath+'/confirm-subcontractor');
    }
  })



}
