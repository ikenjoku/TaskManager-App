import bodyParser from 'body-parser';

module.exports = app => {
    app.set("PORT", process.env.PORT || 3000);
    app.set("json spaces", 4);
    app.use(bodyParser.json());
    app.use(app.auth.initialize());
    app.use((req, res, next) => {
        delete req.body.id;
        next();
    });
};