module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get("PORT"), () => {
            console.log(`Server is up and running at http://localhost:${app.get("PORT")}/`);
        });
    });
};