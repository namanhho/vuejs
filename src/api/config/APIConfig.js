var APIConfig = {
    development: 'http://localhost:51262/api/v1',
    production: 'local:8081'
}

export default APIConfig[process.env.NODE_ENV];