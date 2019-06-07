/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    const addNew = (baby, callback) => {
        console.log("in models",baby);
        const queryString = "INSERT INTO babies (date, name, time, activity, comments) VALUES ($1,$2,$3,$4,$5)"
        const values = [baby.date, baby.name, baby.time, baby.activity, baby.comments];
        dbPoolInstance.query(queryString, values, (err, queryResult) => {
            if (err) {
                callback('error',err, null);
            } else {
                callback(err, queryResult);
            }
        });
    }

    const getAll = (callback) => {
        let queryString = 'SELECT * FROM babies';
        dbPoolInstance.query(queryString, (err, queryResult) => {
            if (err) {
                callback (err, null);
            } else if (queryResult.rows.length > 0) {
                callback(null, queryResult.rows);
            } else {
                callback(null, null);
            }
        })
    }


    return {
        getAll,
        addNew,
    };
};