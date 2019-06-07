module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const babyControllerCallbacks = require('./controllers/baby')(allModels);

  app.get('/', babyControllerCallbacks.index);
  app.get('/add', babyControllerCallbacks.add);
  app.post('/', babyControllerCallbacks.submit);

  // THIS FORM SHOWS USER LOGIN
  const userLoginCallbacks = require('./controllers/userlogin')(allModels);
  app.get('/userlogin', userLoginCallbacks.index);
  app.post('/userlogin', userLoginCallbacks.verify)
}