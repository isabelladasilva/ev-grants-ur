module.exports = function (router) {
var version = "iteration12";


    router.post('/' + version + '/installer/subcontractor', function (req, res) {
          var installer_type = req.session.data['installer_type']
          if (installer_type == "installer") {
          res.redirect(301, '/' + version + '/installer/dateOfCompletion')
          } else {
          res.redirect(301, '/' + version + '/installer/confirmSubcontractor')
          }

        })
        router.post('/' + version + '/installer/dateOfCompletion', function (req, res) {
                res.redirect(301, '/' + version + '/installer/chargepoint-model')
        })
