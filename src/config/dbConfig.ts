let path = require("path");
let config = require(path.resolve(__dirname, '..', '..') + '/src/config/config.json')[process.env.NODE_ENV];
console.log(require(path.resolve(__dirname, '..', '..') + '/src/config/config.json'));
console.log(process.env.NODE_ENV);
export =  {
    "development": {
        "username": config.username,   
        "password": config.password,
        "database": config.database,
        "host": config.host,
        "port":config.port,
        "dialect": config.dialect
    },
    "test": { 
        "username": config.username, 
        "password": config.password,
        "database": config.database,
        "host": config.host,
        "port":config.port,
        "dialect": config.dialect
    },
    "production": {
        "username": config.username,
        "password": config.password,
        "database": config.database,
        "host": config.host,
        "port":config.port,
        "dialect": config.dialect
    }
}