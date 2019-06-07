module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  // let indexControllerCallback = (request, response) => {
  //     db.pokemon.getAll((error, allPokemon) => {
  //       response.render('pokemon/index', { allPokemon });
  //     });
  // };

  // const submitForm = (request,response) => {
  //   console.log("in post");
  //   console.log(request.body);
  //   db.pokemon.apples(request.body, (error, allPokemon) => {
  //       if (error) {
  //           reponse.sendStatus(500);
  //       } else {
  //           response.send('hello');
  //       }
  //   });
  // }

    let index = (req, res) => {
        db.baby.getAll((err, allBaby) => {
            res.render('home', {obj: allBaby});
        })
    }

    let add = (req, res) => {
        res.render('new');
    }

    let submit = (req, res) => {
        db.baby.addNew(req.body, (err, allBaby) => {
            if (err) {
                res.send(err);
            } else {
                res.redirect('/');
            }
        })
    }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: index,
    add: add,
    submit: submit
  };

}