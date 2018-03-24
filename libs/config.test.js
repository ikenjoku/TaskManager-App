module.exports = {
    database: "task-test",
    username: "",
    password: "",
    params: {
        dialect: "sqlite",
        storage: "task.sqlite",
        logging: false,
        define: {
            underscored: true
        }
    },
    jwtSecret: "task-TEST",
    jwtSession: { session: false }
};