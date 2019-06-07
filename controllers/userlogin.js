module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let userLoginControllerCallback = (request, response) => {
    response.render('userlogin')
  };

  let userVerifyControllerCallback = (request, response) => {

        let data = request.body;
        console.log(data);
    db.user.getAll(data, (error, result) => {
        response.render('homepage',data);
        console.log(result[0]);
    })

  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: userLoginControllerCallback,
    verify: userVerifyControllerCallback
  };

}