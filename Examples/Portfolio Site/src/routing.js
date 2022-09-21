module.exports = async function (app, cfg) {
    // Index Page
    app.get('/', async function (req, res) {
        res.render('index', {
        });
    });
}