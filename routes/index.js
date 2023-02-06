module.exports = (app) => {
    app.use('/api/user',require('./api/userRoute'))
    app.use('/api/auth',require('./api/authRoute'))
}