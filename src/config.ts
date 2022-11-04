export default
{
    mongo_connection_string : process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017',

    database_name : process.env.DATABASE_NAME ||'quran_app',

    app_port : parseInt(process.env.APP_PORT) || 3000
}
